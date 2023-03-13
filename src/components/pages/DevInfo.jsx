import React from 'react';
import { IoMdArrowDropleft } from 'react-icons/io';
import { Box, Typography } from '@mui/material';
const DevInfoWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
      }}
    >
      <Typography variant="body2" color="#000">
        {children}
      </Typography>
      <IoMdArrowDropleft color="#8be9fd" fontSize="large" />
    </Box>
  );
};
const DevInfo = () => {
  return (
    <>
      <DevInfoWrapper>نام و نام خانوادگی : مهدی میرزایی</DevInfoWrapper>
      <DevInfoWrapper>سن : 23</DevInfoWrapper>
      <DevInfoWrapper>شهر : شیراز</DevInfoWrapper>
      <DevInfoWrapper>آدرس ایمیل : aeeq18@gmail.com</DevInfoWrapper>
      <DevInfoWrapper>شماره تلفن : 09170000000</DevInfoWrapper>
    </>
  );
};

export default DevInfo;
