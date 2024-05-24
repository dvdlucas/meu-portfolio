import { Box, Typography, styled, Grid } from "@mui/material";
import { DiNodejs, DiReact, DiHtml5, DiJava, DiGit, DiJavascript1, DiDatabase } from "react-icons/di";
import { SiCsharp } from "react-icons/si";
const Skills = () => {
    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
    }));

    return (
        <Box id="skills">
            <StyledSkills>
                <Typography color="primary.contrastText" variant="h3" textAlign="center" gutterBottom>
                    Habilidades
                </Typography>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    { }
                    <Grid item xs={6} sm={4} md={2} lg={3} >
                        <DiNodejs size={80} color="#fff" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3}>
                        <DiReact size={80} color="#fff" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3}>
                        <DiHtml5 size={80} color="#fff" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3}>
                        <SiCsharp size={80} color="#fff" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3}>
                        <DiJava size={80} color="#fff" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3}>
                        <DiGit size={80} color="#fff" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3}>
                        <DiJavascript1 size={80} color="#fff" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3}>
                        <DiDatabase size={80} color="#fff" />
                    </Grid>
                </Grid>
            </StyledSkills>
        </Box>
    );
}

export default Skills;
