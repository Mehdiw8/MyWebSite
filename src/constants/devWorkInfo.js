import { FcAddDatabase, FcDeleteDatabase } from 'react-icons/fc';
import { Box } from '@mui/material';
import caffe from '../assets/Coffee-2346113.svg';
export const devWorkInfo = [
  {
    title: 'تعداد قهوه های زده شده',
    icon: <Box component="img" sx={{ width: 25 }} src={caffe} />,
    totalNumber: '180',
  },
  {
    title: 'تعداد پروژه های انجام شده',
    icon: <FcAddDatabase style={{ fontSize: 25 }} />,
    totalNumber: '16',
  },
  {
    title: 'تعداد پروژه های در حال انجام',
    icon: <FcDeleteDatabase style={{ fontSize: 25 }} />,
    totalNumber: '1',
  },
];
