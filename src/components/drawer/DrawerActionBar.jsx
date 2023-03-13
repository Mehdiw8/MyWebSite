import { Box, Fab } from '@mui/material';
import { grey } from '@mui/material/colors';
import { MdMenu } from 'react-icons/md';
import { useContext } from 'react';
import { MainContext } from '../../context';
const DrawerActionBar = () => {
  const { setOpenDrawer, openDrawer } = useContext(MainContext);
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          display: {
            xs: 'block',
            md: 'none',
          },
        }}
      >
        <Fab
          color="secondary"
          aria-label="sideBar"
          size="small"
          onClick={() => setOpenDrawer(!openDrawer)}
          sx={{
            m: 2,
            backgroundColor: grey[500],
          }}
        >
          <MdMenu fontSize="large" />
        </Fab>
      </Box>
    </>
  );
};

export default DrawerActionBar;
