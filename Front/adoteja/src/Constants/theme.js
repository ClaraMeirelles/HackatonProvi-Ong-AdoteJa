import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { black, primaryColor, secondaryColor, tercearyColor, white } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: tercearyColor,
    },
    info: {
      main: tercearyColor,
    },
    white: {
      main: white,
    },
    text: {
      primary: white,
      secondary: white,
      terceary: white,
      white: tercearyColor,
    },
  },
});
