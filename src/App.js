import './App.css';
import { createTheme, ScopedCssBaseline, ThemeProvider } from "@mui/material";
import CustomRoutes from "./CustomRoutes";

const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#fff',
      border: "#0075FF"
    },
    secondary: {
      main: '#484848',
    },
    piction: {
      background: '#eaeaea',
      text: '#6c6c72',
      white: '#fff',
    },
    grayTones: {
      main: '#636363',
      light: '#eeeeee',
      lighter: '#f5f5f5',
      ultralight: '#fafafa',
      text: "#FF0000"
    },
  },
  spacing: 8,
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <CustomRoutes />
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
