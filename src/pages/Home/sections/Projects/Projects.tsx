import { Box, Typography, styled, Grid } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import ImageLSilva from "../../../../assets/images/Imobi.jpg";
import ImageApiC from "../../../../assets/images/contatos.jpg";

const Projects = () => {
    const StyledProject = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        minHeight: "80vh",
        padding: "100px 50px",
    }));

    return (
        <Box id="projects">
            <StyledProject>
                <Typography color="primary.main" variant="h3" textAlign="center" gutterBottom>
                    Projetos
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <ProjectCard
                            title="Site Imobiliária LSilva"
                            imageSrc={ImageLSilva}
                            description="O projeto consiste em uma plataforma web dedicada a oferecer uma experiência intuitiva e abrangente para clientes que pretendem adquirir propriedades nas regiões de São Roque, Ibiúna, Mairinque e Alumínio. Com um foco especial nessas localidades, a plataforma fornecerá aos usuários uma visão detalhada e atrativa das propriedades disponíveis, facilitando a busca por residências, terrenos ou investimentos."
                            tecnologias="Tecnologias : Html, CSS, JavaScript, NodeJs, MySQL"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ProjectCard
                            title="Sistemas de Contatos"
                            imageSrc={ImageApiC}
                            description="Sistema de controle de contatos, o usuário administrador pode cadastrar novos usuários ou excluir os que eles já possui, funciona como se fosse uma agenda."
                            tecnologias="Tecnologias : C# .NET , Hibernate, SQLServer"
                        />
                    </Grid>
                </Grid>
            </StyledProject>
        </Box>
    );
}

export default Projects;
