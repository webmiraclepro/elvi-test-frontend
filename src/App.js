import { Provider } from 'react-redux';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseLine from '@mui/material/CssBaseline';
import store from 'redux/store';
import theme from 'utils/theme';

import { styled } from "@mui/material/styles";
import { Box, Container, Grid } from "@mui/material";
import AppRouter from 'routes';
import { Notifier } from 'components';


const AppContainer = styled(Box)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const AppHeader = styled(Container)({
  color: '#1b1d21',
  fontSize: 50,
  fontFamily: 'fantasy',
  display: 'flex',
  alignItems: 'center',
  padding: '48px 32px',
  width: '100%',
  backgroundColor: '#fff',
  boxShadow: ''
});

const AppContent = styled(Container)({
  height: 0,
  flexGrow: 1,
  padding: 32,
});


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <AppContainer>
          <AppHeader>
            <Grid container spacing={4}>
              <Grid item>
                <a href="/">
                  <img src="/logo.png" alt="logo" height="72px" />
                </a>
              </Grid>
              <Grid item>
                Elvisolutions Test Task
              </Grid>
            </Grid>
          </AppHeader>
          <AppContent>
            <AppRouter />
          </AppContent>
          <Notifier />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
