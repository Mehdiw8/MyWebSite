import React, { useContext } from 'react';
import { Drawer } from '@mui/material';
import { MainContext } from '../../context';
import { SidebarContent } from '../sidebar';
const SidebarDrawer = () => {
  const { setOpenDrawer, openDrawer } = useContext(MainContext);
  return (
    <>
      <Drawer
        open={openDrawer}
        variant="temporary"
        onClose={() => setOpenDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': { width: 300 },
          display: {
            xs: 'block',
            md: 'none',
          },
        }}
      >
        <SidebarContent />
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
