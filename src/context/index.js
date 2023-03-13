import { createContext } from 'react';

export const MainContext = createContext({
  pageNumber: 0,
  setPageNumber: () => {},
  openDrawer: 0,
  setOpenDrawer: () => {},
  modeHandleChange: () => {},
});
