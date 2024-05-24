import { AppBar, Toolbar, MenuItem, styled } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.primary.main,
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    backgroundColor: "transparent",
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
    },
}));

const NavBar = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar position="absolute">
            <StyledToolbar>
                <StyledMenuItem onClick={() => handleScroll('about')}>Sobre</StyledMenuItem>
                <StyledMenuItem onClick={() => handleScroll('skills')}>Habilidades</StyledMenuItem>
                <StyledMenuItem onClick={() => handleScroll('projects')}>Projetos</StyledMenuItem>
            </StyledToolbar>
        </AppBar>
    );
}

export default NavBar;
