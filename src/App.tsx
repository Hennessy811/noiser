import { Box, Button, Container, createMuiTheme, IconButton, Paper, ThemeProvider, Typography } from '@material-ui/core';
import { Email, Person, VolumeOff, VolumeUp } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Home from './pages/Home';
import useTheme from './shared/hooks/useTheme';
import { RootState } from './store';
import { toggle } from './store/features/player';
import { version } from '../package.json';
import firebase from 'firebase/app';
import { firebaseConfig } from './shared/config';

import 'firebase/database';
import 'firebase/performance';
import 'firebase/analytics';
import { googleSignIn } from './store/features/auth';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

const baseTheme = createMuiTheme();
const defaultTheme = createMuiTheme({
  palette: {
    type: 'light',
    tonalOffset: 0.5,
  },
  typography: {
    h1: {
      fontSize: baseTheme.typography.pxToRem(42),
    },
    h2: {
      fontSize: baseTheme.typography.pxToRem(36),
    },
    h3: {
      fontSize: baseTheme.typography.pxToRem(28),
      fontWeight: 100,
    },
  },
});
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    tonalOffset: 0.5,
  },
});

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Performance Monitoring and get a reference to the service
firebase.performance();
firebase.analytics();

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    borderRadius: 50,
  },
}));

function App() {
  const classes = useStyles();
  const { theme } = useTheme();
  const { isPlaying } = useSelector((state: RootState) => state.player);
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : defaultTheme}>
        <Box
          minHeight="100vh"
          height="auto"
          component={Paper}
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          className="animatedBackground"
        >
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => dispatch(toggle())}>{isPlaying ? <VolumeUp /> : <VolumeOff />}</IconButton>
            <IconButton
              disabled={isLoggedIn}
              onClick={() => {
                dispatch(googleSignIn());
              }}
            >
              {isLoggedIn && user ? (
                <img alt="avatar" className={classes.avatar} src={user.photoURL || ''} width="30" height="30" />
              ) : (
                <Person />
              )}
            </IconButton>
          </Box>
          <Container maxWidth="sm">
            <Box pt={3}>
              <Home />
            </Box>
          </Container>
          <Box display="flex" justifyContent="center" alignItems="center" pb={2}>
            <Typography variant="caption">Version {version}</Typography>
            <Box width={20}></Box>
            <Button variant="text" startIcon={<Email />} href="mailto:mitia2022@gmail.com" target="_blank" rel="noopener">
              Email author
            </Button>

            <Box px={3}>
              <a
                rel="noopener noreferrer"
                href="https://www.producthunt.com/posts/noizer?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-noizer"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290204&theme=light"
                  alt="Noizer - Ambient sounds. Like Noisli, but free | Product Hunt"
                  style={{ width: '250px', height: '54px;' }}
                  width="250"
                  height="54"
                />
              </a>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
