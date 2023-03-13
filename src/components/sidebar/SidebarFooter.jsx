import { Box, Typography } from '@mui/material';
import { MdFavorite, MdOutlineCopyright } from 'react-icons/md';
import ThemeActionButton from './ThemeActionButton';

const SidebarFooter = () => {
  return (
    <div>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          align: 'center',
          justifyContent: 'end',
          flexDirection: 'column',
          mt: 2,
          height: 100,
          color: 'white',
        }}
      >
        <ThemeActionButton />
        <Typography
          variant="subtitle2"
          sx={{ textAlign: 'center', color: 'text.primary' }}
        >
          طراحی شده با ریکت{' '}
          <sup>
            <MdFavorite color="red" />
          </sup>
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'text.primary',
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          کپی رایت <span style={{ margin: '2px' }}> </span>
          <MdOutlineCopyright fontSize="medium" />
        </Typography>
      </Box>
    </div>
  );
};

export default SidebarFooter;
