import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FcLinux } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import CustomChip from '../common/CustomChip';
import { WorkSamWrap } from '../components/pages';
const WorkSamples = ({ helmetTitle }) => {
  return (
    <Card
      sx={{ height: '100vh', backgroundColor: 'white', overflowY: 'scroll' }}
    >
      <Helmet>
        <title> {helmetTitle} </title>
      </Helmet>
      <CardContent>
        <CustomChip
          text="رزومه من"
          bColor="primary.main"
          cColor="primary"
          textAlign="center"
          icon={<FcLinux style={{ fontSize: '25px' }} />}
        />
        <Grid container sx={{ my: 5 }}>
          <WorkSamWrap />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WorkSamples;
