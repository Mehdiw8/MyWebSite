import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { HelmetProvider } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2';

import { lightTheme, darkTheme } from './theme/theme';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const MainLayout = ({ children, mode }) => {
  const theme = mode === 'dark' ? darkTheme : lightTheme;
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Grid container sx={{ textAlign: 'center', height: '100vh' }}>
              {children}
            </Grid>
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MainLayout;
