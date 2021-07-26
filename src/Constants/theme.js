import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { black, primaryColor, secondaryColor } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    text: {
        primary: black,
    }
  },
});
