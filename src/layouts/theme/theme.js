import { createTheme } from '@mui/material/styles';
export const lightTheme = createTheme({
  
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazir,Roboto',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#bd93f9',
    },
  },
});
export const darkTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazir,Roboto',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#8be9fd',
    },
    secondary: {
      main: '#bd93f9',
    },
  },
});
// components: {
//   MuiButton: {
//     variants: [
//       {
//         props: { variant: 'dashed' },
//         style: {
//           textTransform: 'none',
//           border: `2px dashed ${blue[500]}`,
//         },
//       },
//       {
//         props: { variant: 'dashed', color: 'secondary' },
//         style: {
//           border: `4px dashed ${red[500]}`,
//         },
//       },
//     ],
//   },
// },
