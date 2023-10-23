import { useState, useEffect } from 'react';
import { Divider, Typography, Chip, Slide } from '@mui/material';

const CustomChip = ({ icon, bColor, textAlign, cColor, text }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Slide
      {...(loading ? { timeout: 300 } : {})}
      direction="down"
      in={loading}
      style={{
        transitionDelay: loading ? '300ms' : '0ms',
      }}
    >
      <Divider
        textAlign={textAlign}
        sx={{
          mt: 2,
          '&::before, &::after': {
            borderColor: `${bColor}`,
          },
        }}
      >
        <Chip
          icon={icon}
          color={cColor}
          label={
            <Typography variant="body2" color={cColor.main}>
              {text}
            </Typography>
          }
          sx={{
            p: 2.5,
          }}
        />
      </Divider>
    </Slide>
  );
};

export default CustomChip;
