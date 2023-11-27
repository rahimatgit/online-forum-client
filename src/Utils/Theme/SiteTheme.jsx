
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 320,
        sm: 375,
        md: 720,
        lg: 1024,
        xl: 1536,
      },
    },
  });

const SiteTheme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default SiteTheme;