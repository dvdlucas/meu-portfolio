import { Box, Typography, styled } from "@mui/material";

const About = () => {
    const StyledAbout = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 20px",
        boxSizing: "border-box",
    }));

    return (
        <StyledAbout id="about">
            <Typography color="primary.main" variant="h3" textAlign="center" gutterBottom>
                Sobre mim
            </Typography>
            <Typography color="primary.main" variant="body1" textAlign="center">
                Profissional com sólida experiência em SQL, C# .NET e versionamento de código utilizando GIT. Atualmente, atuo na resolução de chamados, realizando análises de cenários e oferecendo soluções eficazes para problemas complexos.
                Recentemente estou expandindo meus conhecimentos em React, JavaScript e Node.js por meio de projetos pessoais. Meu foco principal é o desenvolvimento Backend, com ênfase na criação de APIs e sistemas altamente funcionais e escaláveis.
                Com um compromisso contínuo com a melhoria e inovação, busco sempre entregar soluções que agreguem valor e impulsionem os objetivos da empresa.
            </Typography>
        </StyledAbout>
    );
}

export default About;
