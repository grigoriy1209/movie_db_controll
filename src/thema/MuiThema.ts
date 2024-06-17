import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {},
    components: {
        MuiStack: {
            styleOverrides: {
                root: {
                    height: "10%",
                    alignItems: "center",
                    justifyContent: "center",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    width: "100%",
                    maxWidth: "100%",
                    padding: "0",
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: { width: "100%" },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: { width: "100%" },
            },
        },
    },
});