import React from 'react';
import { MdEmail, MdSubject } from 'react-icons/md';
import ReCAPTCHA from 'react-google-recaptcha';
import { useFormik } from 'formik';
import { contactFormSchema } from '../../validation/contactFormSchema';
import { FcPortraitMode } from 'react-icons/fc';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Typography,
  CardContent,
  TextField,
  InputAdornment,
  CardActions,
  Button,
} from '@mui/material';
const ContactForm = () => {
  const contactForm = {
    fullname: '',
    message: '',
    subject: '',
    email: '',
    recaptcha: '',
  };

  const formik = useFormik({
    initialValues: contactForm,
    validationSchema: contactFormSchema,
    onSubmit: (values) => console.log('values :', values),
  });
  const theme = useTheme();

  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete="false">
        <CardContent>
          <Grid container spacing={2} sx={{ direction: 'ltr' }}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="اسمتو بده"
                variant="outlined"
                name="fullname"
                helperText={
                  formik.touched.fullname ? formik.errors.fullname : null
                }
                error={Boolean(
                  formik.touched.fullname && formik.errors.fullname
                )}
                value={formik.values?.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FcPortraitMode />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="آدرس ایمیل"
                name="email"
                helperText={formik.touched.email ? formik.errors.email : null}
                error={Boolean(formik.touched.email && formik.errors.email)}
                value={formik.values?.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MdEmail />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="عنوان"
                name="subject"
                helperText={
                  formik.touched.subject ? formik.errors.subject : null
                }
                error={Boolean(formik.touched.subject && formik.errors.subject)}
                value={formik.values?.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MdSubject />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                size="small"
                color="warning"
                label="متن پیام"
                name="message"
                helperText={
                  formik.touched.message ? formik.errors.message : null
                }
                error={Boolean(formik.touched.message && formik.errors.message)}
                value={formik.values?.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            hl="fa"
            theme={theme.palette.mode}
            onChange={(value) => {
              formik.setFieldValue('recaptcha', value);
            }}
          />
          {formik.touched.message && formik.errors.message && (
            <Typography variant="caption" color="error">
              {formik.errors.recaptcha}
            </Typography>
          )}
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
          >
            ارسال کن
          </Button>
        </CardActions>
      </form>
    </>
  );
};

export default ContactForm;
