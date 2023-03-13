import { useContext } from 'react';
import { MainContext } from '../../context';
import TabsData from '../../constants/TabsData';
import { grey } from '@mui/material/colors';
import { Tabs, Tab } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const SidebarTabs = () => {
  const theme = useTheme();
  const { pageNumber, setOpenDrawer, handlePageNumber } =
    useContext(MainContext);
  const tabsProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  };
  const tabs = TabsData();

  return (
    <>
      <Tabs
        orientation="vertical"
        scrollButtons="auto"
        indicatorColor={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}
        textColor={theme.palette.mode === 'dark' ? 'primary' : 'secondary'}
        allowScrollButtonsMobile
        variant="scrollable"
        onChange={handlePageNumber}
        value={pageNumber}
        sx={{
          minHeight: 150,
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
            onClick={() => setOpenDrawer(false)}
            sx={{
              color: 'text.primary',
              '&.MuiTab-root': {
                minHeight: 50,
                backgroundColor:
                  theme.palette.mode === 'dark' ? grey[800] : 'limegreen',
                mx: 1,
                my: 0.7,
                borderRadius: 2,
                color: 'text.primary',
              },
            }}
            {...tabsProps(index)}
          />
        ))}
      </Tabs>
    </>
  );
};

export default SidebarTabs;
