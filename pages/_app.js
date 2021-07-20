import "../styles/globals.css";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  overrides: {
    themeColor: "#121212",
    menuColor: "#e8e8e8",
  },
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
