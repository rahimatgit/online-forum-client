import { Avatar, Divider } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


const PostDetails = () => {

    const data = useLoaderData();

    const { post_title, author_image, author_name, post_time, tag, original_post, up_vote, down_vote } = data;
    console.log(data);

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <div style={{width:"60%"}}>
                <h2>{post_title}</h2>
                <p>{tag}</p>
                <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    <Avatar src={author_image}></Avatar>
                    <div >
                        <h3>{author_name}</h3>
                    </div>
                    <p>{post_time}</p>
                </div>
                {original_post}
                <div style={{marginTop:"30px", display:"flex", alignItems:"center", gap:"10px"}}>
                <div >
                <AiFillLike style={{color:"green"}} /> {up_vote}
                </div>
                <div><AiFillDislike style={{color:"red"}}></AiFillDislike> {down_vote}</div>    
                </div>
            </div>
            
        </div>
    );
};

export default PostDetails;