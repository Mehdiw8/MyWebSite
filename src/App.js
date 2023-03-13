import { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import { Sidebar } from './components/sidebar';
import PagesContainer from './containers/PagesContainer';
import SidebarContainer from './containers/SidebarContainer';
import { MainContext } from './context';
import DrawerActionBar from './components/drawer/DrawerActionBar';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PagesWrapper from './pages/PagesWrapper';
function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMdup = useMediaQuery(theme.breakpoints.up('md'));
  const [mode, setMode] = useState();
  useEffect(() => {
    setMode('dark');
  }, []);

  useEffect(() => {
    if (isMdup) {
      setOpenDrawer(false);
    }
  }, [isMdup]);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };
  const modeHandleChange = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };
  const handlePageIndex = (index) => {
    setPageNumber(index);
  };
  return (
    <MainContext.Provider
      value={{
        modeHandleChange,
        pageNumber,
        setPageNumber,
        openDrawer,
        setOpenDrawer,
        handlePageNumber,
      }}
    >
      <MainLayout mode={mode}>
        {/* SideBar */}
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionBar />
        {/* Pages */}
        <PagesContainer>
          <PagesWrapper handlePageIndex={handlePageIndex} />
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
