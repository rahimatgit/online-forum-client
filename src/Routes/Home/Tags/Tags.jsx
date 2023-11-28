import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const Tags = () => {

    const axiosPublic = useAxiosPublic();
    const [tags, setTags] = useState([]);

    const tagsArray = ["#TechnologyTalk", "#ScienceDiscussion","#InnovationIdeas","#CreativeThinking",
"#ProgrammingPro","#HealthWellness","#TravelAdventures","#BusinessStrategy","#ArtInspiration",
"#BookClub","#FoodieFiesta","#EnvironmentalImpact","#FitnessJourney","#Mindfulness","#DIYProjects",
"#CareerInsights","#EducationalDebates","#ParentingTips","#MusicMania","#MovieNight"];

    useEffect( () => {
        axiosPublic.get('/tags')
        .then(res => {
            setTags(res.data);
        })
    } , [])

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
      }));

      const lightTheme = createTheme({ palette: { mode: 'light' } });

    return (
        <div style={{marginTop:"50px"}}>
            <Typography variant="h2" textAlign="center" fontWeight="700" marginBottom="30px">
                All The <span style={{color:"green"}}>Tags</span>
            </Typography>
            <Grid container spacing={2}>
     
        <Grid item xs={12} >
          <ThemeProvider theme={lightTheme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr 1fr 1fr 1fr' },
                gap: 2,
              }}
            >
              {/* {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))} */}
              {
                tagsArray.map((tag, idx) => (<Item                   
                    key={idx}
                    sx={{color:"green"}}
                >
                    {tag}
                </Item>))
              }
            </Box>
          </ThemeProvider>
        </Grid>

    </Grid>
        </div>
    );
};

export default Tags;