import { Box, Typography, IconButton } from '@mui/material';
import me from '../../assets/Me.jpg';
import { alphba } from '../../constants/alphabetPersian';
import { RandomReveal } from 'react-random-reveal';
import { social } from '../../constants/social';

const SidebarHeader = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          justifyContent: 'center',
          color: 'text.primary',
          mt: 2,
        }}
      >
        <img
          alt="M"
          src={me}
          style={{
            objectFit: 'cover',
            margin: '0 auto',
            width: 180,
            height: 180,
            borderRadius: '5px',
          }}
        />

        <Typography variant="h5">
          <RandomReveal
            isPlaying
            duration={4}
            revealDuration={1}
            updateInterval={0.1}
            characterSet={alphba}
            revealEasing="linear"
            characters="مهدی میرزایی"
          />
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.8 }}>
          برنامه نویس فرانت اند
        </Typography>
        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {social.map((element) => {
            const { icon, href, arialLabel, id } = element;
            return (
              <IconButton aria-label={arialLabel} key={id}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default SidebarHeader;
