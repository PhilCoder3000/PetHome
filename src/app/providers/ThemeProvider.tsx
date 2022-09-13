import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
  palette: {
  }
});

export function ThemeProvider({ children }: React.PropsWithChildren<{}>) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
