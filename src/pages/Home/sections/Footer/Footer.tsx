import { Box, Typography, styled } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    const StyledFooter = styled("footer")(({ theme }) => ({
        backgroundColor: "#beb8b8",
        padding: theme.spacing(2),
        textAlign: "center",
        borderTop: `1px solid ${theme.palette.divider}`,
        position: "relative",
        bottom: 0,
        width: "100%",
    }));

    const IconWrapper = styled("div")(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(1),
    }));

    const IconLink = styled("a")(({ theme }) => ({
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    }));

    return (
        <StyledFooter>
            <IconWrapper>
                <IconLink href="https://linkedin.com/in/david-lucas-devfullstack/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon fontSize="large" />
                </IconLink>
                <IconLink href="https://github.com/dvdlucas" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon fontSize="large" />
                </IconLink>
                <IconLink href="https://wa.me/015996353517" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon fontSize="large" />
                </IconLink>
            </IconWrapper>
            <Typography variant="body2" color="textSecondary">
                ©2024 David Lucas - Todos os direitos reservados
            </Typography>
        </StyledFooter>
    );
}

export default Footer;
