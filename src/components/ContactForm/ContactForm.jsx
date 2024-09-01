import { Field, Form, Formik } from 'formik';
import styles from './ContactForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsSlice';
import { nanoid } from 'nanoid';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required field')
    .min(3, 'Name is too short')
    .max(50, 'Name is too long'),
  number: Yup.string()
    .required('Phone number is required field')
    .matches(phoneRegExp, 'Phone number is not valid'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const nameFieldId = nanoid(); // Використання nanoid для створення унікальних ID
  const telFieldId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log('hello');

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor={nameFieldId}></label>
        <Field
          id={nameFieldId} // Прив'язка ID до Field
          className={styles.input}
          type="text"
          name="name"
          required
        />
        <ErrorMessage className={styles.err} name="name" component="span" />

        <label className={styles.label} htmlFor={telFieldId}>
          <Field
            id={telFieldId} // Прив'язка ID до Field
            className={styles.input}
            type="tel"
            name="number"
            required
          />
          <ErrorMessage className={styles.err} name="number" component="span" />
        </label>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
