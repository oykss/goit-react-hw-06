import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactsForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        ...values,
      })
    );

    actions.resetForm();
  };
  return (
    <Formik initialValues={{ name: '', tel: '' }} onSubmit={handleSubmit}>
      <Form>
        <label>
          <Field name="name" type="text" />
        </label>
        <label>
          <Field name="tel" type="text" />
        </label>
        <button type="submit">go</button>
      </Form>
    </Formik>
  );
}
