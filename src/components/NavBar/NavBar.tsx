import { AppBar, Toolbar, MenuItem, styled, Box, List, ListItem, ListItemText, IconButton, Drawer } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button onClick={() => handleScroll('about')}>
                    <ListItemText primary="Sobre" />
                </ListItem>
                <ListItem button onClick={() => handleScroll('skills')}>
                    <ListItemText primary="Habilidades" />
                </ListItem>
                <ListItem button onClick={() => handleScroll('projects')}>
                    <ListItemText primary="Projetos" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="absolute">
            <StyledToolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "space-evenly", width: '100%' }}>
                    <StyledMenuItem onClick={() => handleScroll('about')}>Sobre</StyledMenuItem>
                    <StyledMenuItem onClick={() => handleScroll('skills')}>Habilidades</StyledMenuItem>
                    <StyledMenuItem onClick={() => handleScroll('projects')}>Projetos</StyledMenuItem>
                </Box>
            </StyledToolbar>
        </AppBar>
    );
}

export default NavBar;
