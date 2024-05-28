import { Box, Typography, styled, Grid } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';

const About = () => {
    const StyledAbout = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 50px",
        boxSizing: "border-box",
    }));

    const InfoBox = styled(Box)(({ theme }) => ({
        border: `1px solid #d4d3d3`,
        padding: theme.spacing(2),
        textAlign: "center",
        borderRadius: theme.shape.borderRadius,
        maxWidth: "200px",
        margin: "10px",
    }));

    return (
        <StyledAbout id="about">
            <Typography color="primary.main" variant="h3" textAlign="center" gutterBottom>
                Sobre mim
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={8} sm="auto">
                    <InfoBox>
                        <EmojiEventsIcon fontSize="large" color="secondary" />
                        <Typography variant="h6" fontWeight="bold">Experiências</Typography>
                        <Typography variant="body2">1+ ano</Typography>
                        <Typography variant="body2">Desenvolvedor FullStack - Docknox</Typography>
                    </InfoBox>
                </Grid>
                <Grid item xs={8} sm="auto">
                    <InfoBox>
                        <SchoolIcon fontSize="large" color="secondary" />
                        <Typography variant="h6" fontWeight="bold">Educação</Typography>
                        <Typography variant="body2">Facens - Sorocaba</Typography>
                        <Typography variant="body2">Análise e Desenvolvimento de Sistemas</Typography>
                    </InfoBox>
                </Grid>
            </Grid>
            <Typography color="primary.main" variant="body1" textAlign="left" marginTop={4}>
                Profissional com sólida experiência em SQL, C# .NET e versionamento de código utilizando GIT.
                Atualmente, atuo na criação de novas features e correções de bugs, realizando análises de cenários e oferecendo soluções eficazes para problemas complexos.
                Recentemente estou expandindo meus conhecimentos em React, JavaScript e Node.js por meio de projetos pessoais.
                Meu foco principal é o desenvolvimento Backend, com ênfase na criação de APIs e sistemas altamente funcionais e escaláveis.
                Com um compromisso contínuo com a melhoria e inovação, busco sempre entregar soluções que agreguem valor e impulsionem os objetivos da empresa.
            </Typography>
        </StyledAbout>
    );
}

export default About;
