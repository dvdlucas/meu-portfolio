import { Box, Typography, styled, Grid } from "@mui/material";
import { DiNodejs, DiReact, DiHtml5, DiJava, DiGit, DiJavascript1, DiDatabase } from "react-icons/di";
import { SiCsharp } from "react-icons/si";

const Skills = () => {
    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
    }));

    const IconWrapper = styled(Box)({
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: "#acec98",
            borderRadius: "10%"
        },
    });

    return (
        <Box id="skills">
            <StyledSkills>
                <Typography color="primary.contrastText" variant="h3" textAlign="center" gutterBottom>
                    Habilidades
                </Typography>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={6} sm={4} md={2} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconWrapper>
                            <DiNodejs size={80} color="#fff" />
                            <Typography color="primary.contrastText" variant="h6" textAlign="center">Node JS</Typography>
                        </IconWrapper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconWrapper>
                            <DiReact size={80} color="#fff" />
                            <Typography color="primary.contrastText" variant="h6" textAlign="center">React</Typography>
                        </IconWrapper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconWrapper>
                            <DiHtml5 size={80} color="#fff" />
                            <Typography color="primary.contrastText" variant="h6" textAlign="center">Html</Typography>
                        </IconWrapper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconWrapper>
                            <SiCsharp size={80} color="#fff" />
                            <Typography color="primary.contrastText" variant="h6" textAlign="center">C#</Typography>
                        </IconWrapper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconWrapper>
                            <DiJava size={80} color="#fff" />
                            <Typography color="primary.contrastText" variant="h6" textAlign="center">Java</Typography>
                        </IconWrapper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconWrapper>
                            <DiGit size={80} color="#fff" />
                            <Typography color="primary.contrastText" variant="h6" textAlign="center">Git</Typography>
                        </IconWrapper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconWrapper>
                            <DiJavascript1 size={80} color="#fff" />
                            <Typography color="primary.contrastText" variant="h6" textAlign="center">JavaScript</Typography>
                        </IconWrapper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconWrapper>
                            <DiDatabase size={80} color="#fff" />
                            <Typography color="primary.contrastText" variant="h6" textAlign="center">SQL</Typography>
                        </IconWrapper>
                    </Grid>
                </Grid>
            </StyledSkills>
        </Box>
    );
}

export default Skills;
