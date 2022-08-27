import { createTheme, ThemeProvider } from '@mui/material';
import Nav from '../components/Nav';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#246551',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
