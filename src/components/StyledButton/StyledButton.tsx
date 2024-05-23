import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyleButtonProps {
    children: ReactNode
    onClick: () => void
}
const StyledButton: React.FC<StyleButtonProps> = ({ children, onClick }) => {

    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
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
        }
    }))

    return (
        <>
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton