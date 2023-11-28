import { TextField } from "@mui/material";


const Banner = () => {

    const textFieldStyle = {
        '& .MuiInputBase-input': {
          color: 'white', // Text color
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'white', // Border color
        },
      };

    return (
        <div style={{backgroundImage: 'url("https://img.freepik.com/free-photo/diversity-teenager-team-seminar-training-education-concept_53876-146866.jpg?w=1380&t=st=1701103980~exp=1701104580~hmac=663dc28bd064cc0ed30d04f63392b2abbca4133c58a40588d86183bf2e42086a")', backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', opacity: "80%", display: "flex", justifyContent:"center", alignItems:"center"}}>
            
            <div>
                <h2 style={{color: "white", fontSize: "40px", textAlign:"center"}}>Welcome to
                <br />
                 Thought<span style={{color: "green", fontSize: "60px"}}>Scape!</span></h2>
                 <TextField
                    label="Search with tags"
                    variant="outlined"
                    style={{backgroundColor:"white", width: "300px"}}
                 ></TextField>
            </div>
        </div>
    );
};

export default Banner;