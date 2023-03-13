import mail from '../assets/shake.gif';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2';
import { FcBinoculars } from 'react-icons/fc';
import { ContactForm } from '../components/pages';
import CustomChip from '../common/CustomChip';
const Contact = ({ helmetTitle }) => {
  return (
    <Card
      sx={{
        height: '100vh',
        backgroundColor: 'whitesmoke',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Helmet>{helmetTitle}</Helmet>
      <CardContent>
        <CustomChip
          textAlign="center"
          bColor="warning.main"
          cColor="warning"
          text="
          ارتباط با من
          "
          icon={<FcBinoculars fontSize="large" />}
        />

        <Grid container sx={{ mt: 5 }}>
          {/* Form */}
          <Grid
            xs={12}
            md={8}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '800px',
                p: 2.5,
              }}
            >
              <ContactForm />
            </Card>
          </Grid>
          {/* Email */}
          <Grid
            xs={0}
            md={4}
            sx={{
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={mail}
              sx={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                right: 0,
                top: 0,
                borderRadius: '15px',
                opacity: 0.2,
                index: '-9',
              }}
            />
            <Box
              component="div"
              sx={{ index: 999, position: 'absolute', top: 0, right: '20%' }}
            >
              <Typography
                variant="h6"
                color="black"
                sx={{
                  mt: 4,
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block',
                  },
                }}
              >
                بیا در مورد همه چیز باهم صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="black"
                sx={{
                  mt: 2,
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block',
                  },
                }}
              >
                👋{' '}
                <a
                  href="mailto:aeeq18@gmail.com"
                  alt="email"
                  style={{
                    color: 'tomato',
                  }}
                >
                  ایمیل
                </a>{' '}
                بزن به من
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Contact;
