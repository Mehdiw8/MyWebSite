import {
  Chip,
  Divider,
  Box,
  Typography,
  LinearProgress,
  Badge,
} from '@mui/material';
const Skill = ({ color, icon, name, value }) => {
  return (
    <Box
      sx={{
        width: '70%',
      }}
    >
      <Divider
        textAlign="right"
        variant="middle"
        sx={{
          '&::after ,&::before': {
            borderColor: color,
            opacity: 0.3,
          },
        }}
      >
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 20 }} />}
          label={<Typography variant="subtitle2">{name}</Typography>}
          sx={{
            padding: ' 20px 10px',
            '& .MuiChip-icon': { marginRight: '10px' },
            textAlign: 'center',
            '&.MuiChip-root': {
              backgroundColor: `${color}`,
              '& .MuiChip-label': { paddingRight: 0 },
            },
          }}
        />
      </Divider>
      <Box
        sx={{
          marginBottom: '10px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ minWidth: 35, mx: 2 }}>
          <Typography variant="body2" color="black">
            <Badge
              sx={{
                '& .MuiBadge-badge': { fontSize: 13, color: 'text.primary' },
              }}
              variant="standard"
              badgeContent={`${value}%`}
              color="secondary"
            />
          </Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <LinearProgress
            variant="determinate"
            sx={{
              height: 7,
              borderRadius: '5px',
              '& .muirtl-qd76qg-MuiLinearProgress-bar1': {
                backgroundColor: `${color}`,
              },
            }}
            value={value}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;
