import { Container, Grid, Typography } from "@mui/material";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PostCard from './PostCard';

const Posts = () => {

    const axiosPublic = useAxiosPublic();
    const { data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axiosPublic.get("/posts");
            return res.data;
        }
    })

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
        </div>
    );
};

export default Posts;