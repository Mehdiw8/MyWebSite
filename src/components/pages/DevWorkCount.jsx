import CountUp from 'react-countup';
import { Box, Tooltip, Chip, Typography } from '@mui/material';
import { devWorkInfo } from '../../constants/devWorkInfo';
const DevWorkCount = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        height: '90%',
        widht: 1,
      }}
    >
      {devWorkInfo.map((workinfo, index) => {
        const { totalNumber, icon, title } = workinfo;
        return (
          <Tooltip
            key={index}
            title={title}
            arrow
            placement="right"
            followCursor={true}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Chip
              sx={{ backgroundColor: '#fff' }}
              label={
                <Typography
                  sx={{
                    color: '#333',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexDirection: 'row-reverse',
                  }}
                >
                  <CountUp
                    style={{ fontSize: '14px' }}
                    delay={2}
                    start={0}
                    end={totalNumber}
                  />
                  <Box component="span" sx={{ mx: '3px' }}>
                    {icon}
                  </Box>
                </Typography>
              }
            />
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default DevWorkCount;
