import { Button, Container, Grid, Typography } from "@mui/material";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PostCard from './PostCard';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";


const Posts = () => {
    // const {count} = useLoaderData();
    // console.log(count);
    const [posts, setPosts] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = Math.ceil(25 / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    // const { data: posts = [] } = useQuery({
    //     queryKey: ['posts'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/posts?page=${currentPage}&size=${itemsPerPage}`);
    //         return res.data;
    //     }
    // })

    useEffect( () => {
        axiosPublic.get(`/posts?page=${currentPage}&size=${itemsPerPage}`)
        .then(res => {
            setPosts(res.data);
        })
    } , [currentPage, itemsPerPage, axiosPublic])


    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }


    return (
        <div style={{ marginTop: "50px" }}>
            <Typography variant="h2" textAlign="center" fontWeight="700" marginBottom="30px">
                See All <span style={{ color: "green" }}>Posts</span>
            </Typography>
            <Container maxWidth="lg">
            <Grid container spacing={2}>
                {/* <Grid item md={4}>
                    {posts.map(post => <PostCard
                        key={post._id}
                        post={post}
                    >
                    </PostCard>)}
                </Grid> */}
                {
                    posts.map(post => <Grid
                        key={post._id}
                        item md={4}
                    >
                        <PostCard post={post}></PostCard>
                    </Grid>)
                }
            </Grid>
            </Container>
            {/* pagination */}
            <div>
                <div>
                    <Button onClick={handlePrevPage}>Previous</Button>
                    {
                        pages.map(page => <Button 
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </Button>)
                    }
                    <Button onClick={handleNextPage}>Next</Button>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Posts;