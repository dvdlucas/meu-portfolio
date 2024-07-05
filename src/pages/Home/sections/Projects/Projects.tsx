import { Box, Typography, styled, Grid } from "@mui/material";
import ProjectCard from "@components/ProjectCard/ProjectCard";
import ImageLSilva from "@assets/images/Imobi.jpg";
import ImageApiC from "@assets/images/Contatos.jpg";
import ImageTodoList from "@assets/images/Todlist.jpg"

const Projects = () => {
    const StyledProject = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        minHeight: "80vh",
        padding: "100px 100px",
    }));

    return (
        <Box id="projects">
            <StyledProject>
                <Typography color="primary.main" variant="h3" textAlign="center" gutterBottom>
                    Projetos
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={8} md={4}>
                        <ProjectCard
                            title="Site Imobiliária LSilva"
                            imageSrc={ImageLSilva}
                            description="O projeto consiste em uma plataforma web dedicada a oferecer uma experiência intuitiva e abrangente para clientes que pretendem adquirir propriedades nas regiões de São Roque, Ibiúna, Mairinque e Alumínio. Com um foco especial nessas localidades, a plataforma fornecerá aos usuários uma visão detalhada e atrativa das propriedades disponíveis, facilitando a busca por residências, terrenos ou investimentos."
                            tecnologias="Tecnologias : Html, CSS, JavaScript, NodeJs, MySQL"
                            link="https://github.com/yVinii/SiteImobi"
                        />
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <ProjectCard
                            title="Sistemas de Contatos"
                            imageSrc={ImageApiC}
                            description="Este projeto é uma aplicação completa para o gerenciamento de contatos, oferecendo uma interface intuitiva e fácil de usar para administradores. Com este sistema, os administradores podem adicionar novos contatos e excluir contatos existentes. A funcionalidade do sistema é comparável a uma agenda digital, proporcionando um meio centralizado e eficiente de gerenciar uma lista de contatos de forma estruturada e segura."
                            tecnologias="Tecnologias : C# .NET , Hibernate, SQLServer"
                            link="https://github.com/dvdlucas/Projeto-Contatos"
                        />
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <ProjectCard
                            title="Lista de Tarefas"
                            imageSrc={ImageTodoList}
                            description="Este projeto é uma ferramenta poderosa e intuitiva para a gestão de tarefas, desenvolvida para facilitar o cadastro, edição e exclusão de atividades. Com ele, é possível classificar tarefas por prioridade e adicionar descrições detalhadas, além de marcar tarefas como concluídas. Ideal para otimizar a gestão de tempo, organização e definição de prioridades, este sistema é uma excelente solução para melhorar a produtividade e garantir que todas as tarefas sejam gerenciadas de forma eficiente."
                            tecnologias="Tecnologias : NodeJs , HTML CSS, JavaScript, Handlebars, SQLlite"
                            link="https://lista-de-tarefas-v4ij.onrender.com/"
                        />
                    </Grid>
                </Grid>
            </StyledProject>
        </Box>
    );
}

export default Projects;
