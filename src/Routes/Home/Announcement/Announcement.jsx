import { Typography } from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';

const Announcement = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginTop:"50px"}}>
            <CampaignIcon fontSize="large" sx={{color:"green"}}></CampaignIcon>
            <Typography variant="h2" textAlign="center" fontWeight="700" marginBottom="30px" >
                Announcements 
            </Typography>
        </div>
    );
};

export default Announcement;