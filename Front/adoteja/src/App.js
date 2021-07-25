import { ThemeProvider } from '@material-ui/styles';
import { theme } from './Constants/theme';
import { Router } from './Routes/Router'
export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router />
    </ThemeProvider>
  );
}

