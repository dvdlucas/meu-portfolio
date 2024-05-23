import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#4f8e3e',
        },
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
});
theme = responsiveFontSizes(theme);
export default theme;
