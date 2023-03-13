import React from 'react';
import { Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useContext } from 'react';
import { MainContext } from '../../context';
const ThemeActionButton = () => {
  const { modeHandleChange } = useContext(MainContext);
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <Button
        color="secondary"
        variant="contained"
        aria-label="sideBar"
        size="small"
        onClick={modeHandleChange}
        sx={{
          m: 2,
          color: 'text.primary',
        }}
      >
        {theme.palette.mode === 'dark' ? (
          <BsFillMoonStarsFill style={{ color: '#EEDBA8' }} />
        ) : (
          <BsFillSunFill style={{ color: 'yellow' }} />
        )}
        <span style={{ marginLeft: '5px' }}></span>
        {theme.palette.mode === 'dark' ? ' تم روز ' : 'تم شب'}
      </Button>
    </Box>
  );
};

export default ThemeActionButton;
