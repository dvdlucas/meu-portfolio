import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Habilidades</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar
