import { Typography } from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';

const Announcement = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginTop:"50px"}}>
            <CampaignIcon fontSize="large" sx={{color:"green"}}></CampaignIcon>
            <Typography variant="h2" textAlign="center" fontWeight="700" marginBottom="30px" >
                Announcements 
            </Typography>
            <div style={{width:"60%", display:"flex", justifyContent:"center"}}>
                <div>
                    <img style={{height:"500px"}} src="https://img.freepik.com/free-vector/special-offer-lettering-paint-blots_1262-8008.jpg?w=740&t=st=1701341350~exp=1701341950~hmac=aa3f997d10a9709b8d9a1d24194650a2c6b0907ea65c05fd73fa667d298ed9d9" alt="" />
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <h2>Be our member </h2>
                    <h1>On 50% sale!</h1>
                    <h4>Just click to the membership button, get the discount, pay and done!s</h4>
                </div>
            </div>
        </div>
    );
};

export default Announcement;