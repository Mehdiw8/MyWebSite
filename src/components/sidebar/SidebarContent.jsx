import { SidebarHeader, SidebarFooter, SidebarTabs } from '.';
import { Divider } from '@mui/material';
const SidebarContent = () => {
  return (
    <>
      <SidebarHeader />
      <Divider
        variant="middle"
        sx={{
          mt: 0,
          mb: { sx: 0, md: 2 },
          color: 'text.primary',
        }}
      />
      {/* Tabs */}
      <SidebarTabs />
      <Divider
        variant="middle"
        sx={{ mt: { xs: 0, md: 2 }, color: 'text.primary' }}
      />
      <SidebarFooter />
    </>
  );
};

export default SidebarContent;
