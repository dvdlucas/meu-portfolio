import { Typography, styled } from "@mui/material"

const Footer = () => {

    const StyledProject = styled("div")(({ theme }) => ({
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
    }))

    return (
        <>
            <StyledProject>
                <Typography color="primary.contrastText" variant="h3" textAlign="center">Projetos</Typography>
            </StyledProject>
        </>
    )
}

export default Footer
