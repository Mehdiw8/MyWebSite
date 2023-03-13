import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Helmet } from 'react-helmet-async';
import { FcComboChart, FcBriefcase, FcGraduationCap } from 'react-icons/fc';
import CustomChip from '../common/CustomChip';
import { EduTimL, ExperTimL } from '../components/pages';
const Cv = ({ helmetTitle }) => {
  return (
    <Card
      sx={{ height: '100vh', backgroundColor: 'white', overflowY: 'scroll' }}
    >
      <Helmet>
        <title> {helmetTitle} </title>
      </Helmet>
      <CardContent>
        <CustomChip
          textAlign="center"
          bColor="error.main"
          cColor="error"
          icon={<FcComboChart style={{ fontSize: '25px' }} />}
          text="رزومه من"
        />

        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            mt: 5,
          }}
        >
          {/* My education */}
          <Grid xs={12} sm={6} sx={{ mb: { xs: 2 } }}>
            <CustomChip
              textAlign="center"
              cColor="primary"
              bColor="primary.main"
              icon={<FcGraduationCap style={{ fontSize: '25px' }} />}
              text="تحصیلات من"
            />
            {/* edu */}
            <EduTimL />
          </Grid>
          {/* My Experience */}
          <Grid xs={12} sm={6}>
            <CustomChip
              textAlign="center"
              bColor="warning.main"
              cColor="warning"
              icon={<FcBriefcase style={{ fontSize: '25px' }} />}
              text="تجربیات من"
            />
            {/* exper */}
            <ExperTimL />
          </Grid>
        </Grid>
      </CardContent>{' '}
    </Card>
  );
};

export default Cv;
