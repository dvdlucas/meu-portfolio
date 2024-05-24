import { Box, Typography, styled, Grid } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";


const Projects = () => {
    const StyledProject = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        minHeight: "100vh",
        padding: "100px 20px",
    }));

    return (
        <Box id="projects">
            <StyledProject>
                <Typography color="primary.main" variant="h3" textAlign="center" gutterBottom>
                    Projetos
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {/* Projeto 1 */}
                    <Grid item xs={12} md={6}>
                        <ProjectCard
                            title="Nome do Projeto 1"
                            imageSrc="/path/to/project1-image.jpg"
                            description="Descrição do Projeto 1"
                        />
                    </Grid>
                    {/* Projeto 2 */}
                    <Grid item xs={12} md={6}>
                        <ProjectCard
                            title="Nome do Projeto 2"
                            imageSrc="/path/to/project2-image.jpg"
                            description="Descrição do Projeto 2"
                        />
                    </Grid>
                </Grid>
            </StyledProject>
        </Box>
    );
}

export default Projects;
