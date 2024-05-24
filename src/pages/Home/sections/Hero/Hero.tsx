import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/Tamires & David-418.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
        paddingTop: "100px"
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: "0",
    }
}));

const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const Hero = () => {
    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} alt="David Lucas" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>David Lucas</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">Desenvolvedor Web FullStack</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center">
                                <StyledButton onClick={() => window.open("https://linkedin.com/in/david-lucas-devfullstack/", "_blank")}>
                                    <LinkedInIcon />
                                    <Typography>LinkedIn</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center">
                                <StyledButton onClick={() => window.open("https://github.com/dvdlucas", "_blank")}>
                                    <GitHubIcon />
                                    <Typography>GitHub</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center">
                                <StyledButton onClick={() => window.open("https://wa.me/015996353517", "_blank")}>
                                    <WhatsAppIcon />
                                    <Typography>WhatsApp</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
}

export default Hero;
