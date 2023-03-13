import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { BsCodeSlash } from 'react-icons/bs';
import { FcReading } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import { DevInfo, Skills, DevWorkCount } from '../components/pages';
import CustomChip from '../common/CustomChip';
const About = ({ helmetTitle }) => {
  return (
    <Card
      sx={{ height: '100vh', backgroundColor: 'white', overflowY: 'scroll' }}
    >
      <Helmet>
        <title> {helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container>
          <Grid
            sx={{
              mt: 5,
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
            xs={0}
            sm={3}
            md={3}
            lg={3}
            xl={3}
          >
            <DevWorkCount />
          </Grid>
          <Grid xs={12} sm={7} md={7} lg={7} xl={7}>
            <CustomChip
              textAlign="right"
              icon={<BsCodeSlash fontSize="large" />}
              bColor="secondary.main"
              cColor="secondary"
              text="
              توسعه دهنده فرانت اند
              "
            />
            <DevInfo />
          </Grid>
          <Grid xs={0} sm={0} md={2} lg={2} xl={2}></Grid>
        </Grid>

        <Grid container>
          <Grid sx={{ width: 1, mt: 3 }}>
            <CustomChip
              textAlign="center"
              icon={<FcReading fontSize="large" />}
              bColor="secondary.main"
              cColor="secondary"
              text="
              مهارت های من
              "
            />

            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
