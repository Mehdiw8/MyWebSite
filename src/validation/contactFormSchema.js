import * as yup from 'yup';
export const contactFormSchema = yup.object().shape({
  fullname: yup.string().required('نام الزامی می باشد'),
  email: yup
    .string()
    .email('آدرس ایمیل معتبر نیست')
    .required('آدرس ایمیل الزامی می باشد'),
  subject: yup.string().required('عنوان الزامی می باشد'),
  message: yup.string().required('نوشتن پیام الزامی می باشد'),
  recaptcha: yup.string().required('کپتچا الزامی می باشد'),
});
