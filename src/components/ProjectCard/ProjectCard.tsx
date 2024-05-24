import { Box, Typography, styled, Grid } from "@mui/material";
import ButtonStyle from "../../components/StyledButton/StyledButton";

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description }) => {
    const StyledProjectCard = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
    }));

    return (
        <StyledProjectCard>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                    <img src={imageSrc} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" align="center" gutterBottom>
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" align="center" gutterBottom>
                        {description}
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <ButtonStyle onClick={() => window.open("https://github.com/dvdlucas", "_blank")}>
                        Deploy
                    </ButtonStyle>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <ButtonStyle onClick={() => window.open("https://github.com/dvdlucas", "_blank")}>
                        GitHub
                    </ButtonStyle>
                </Grid>
            </Grid>
        </StyledProjectCard>
    );
}

export default ProjectCard;
