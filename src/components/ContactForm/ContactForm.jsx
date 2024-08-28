import { Field, Form, Formik } from 'formik'
import styles from './ContactForm.module.css'
import * as Yup from "yup";
import { ErrorMessage } from "formik";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const FeedbackSchema = Yup.object().shape({
  userName: Yup.string().required("Name is required field").min(3, "Name is too short").max(50, "Name is too long"),
  userNumber: Yup.string().required("Phone number is required field").matches(phoneRegExp, 'Phone number is not valid')
});


const initialValues = {
  userName: "",
  userNumber: "",
};


export const ContactForm = ({onContactForm}) => {
  
  const handleSubmit = (values, actions) => {
    const contactObj = {
      name: values.userName,
      number: values.userNumber,
    };
onContactForm(contactObj);
		console.log(values);
		actions.resetForm();
	};
  
  return (
    <Formik initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      {({ values }) => {
        console.log('values: ', values);
        
        return (<Form className={styles.form}>
        <label className={styles.label}>
          Name
            <Field className={styles.input} type="text" name="userName" required />
            <ErrorMessage className={styles.err} name="userName" component="span" />
        </label>
        <label className={styles.label}>
          Number
            <Field className={styles.input} type="tel" name="userNumber" required />
            <ErrorMessage className={styles.err} name="userNumber" component="span" />
        </label>
        <button className={styles.btn} type="submit">Add contact</button>
      </Form>)
      }}
          
    </Formik>
  );
};

export default ContactForm