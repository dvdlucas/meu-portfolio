import { Box, Typography, styled, Grid } from "@mui/material";


interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
    tecnologias: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, tecnologias }) => {
    const StyledProjectCard = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.primary.main}`,
        padding: theme.spacing(2),
        height: "100%",
        position: "relative",
    }));

    const StyledTechnologies = styled(Typography)(({ theme }) => ({
        fontSize: '1.2rem',
        padding: theme.spacing(1),
        borderRadius: '5px',
        textAlign: 'center',
    }));


    const StyledButtonWithBorder = styled("button")(({ theme }) => ({
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "80%",
        color: theme.palette.primary.main,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        }
    }))

    return (
        <StyledProjectCard>
            <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                        {title}
                    </Typography>
                    <Grid item xs={12}>
                        <img src={imageSrc} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" align="left" gutterBottom>
                        {description}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <StyledTechnologies variant="body1" align="center" gutterBottom fontWeight="bold">
                        {tecnologias}
                    </StyledTechnologies>
                </Grid>
                {/* 
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <ButtonStyle onClick={() => window.open("https://github.com/dvdlucas", "_blank")}>
                        Deploy
                    </ButtonStyle>
                </Grid>
                */}
                <Grid item xs={12}>
                    <StyledButtonWithBorder onClick={() => window.open("https://github.com/dvdlucas", "_blank")}>
                        GitHub
                    </StyledButtonWithBorder>
                </Grid>
            </Grid>
        </StyledProjectCard>
    );
}

export default ProjectCard;
