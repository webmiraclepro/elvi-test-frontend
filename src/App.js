import { styled } from "@mui/material/styles";
import { Box, Container, Grid } from "@mui/material";
import AppRouter from 'routes';
import { Notifier } from 'components';
import { Provider } from 'react-redux';
import store from 'redux/store';


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
    </Provider>
  );
}

export default App;
