import { Field, Form, Formik } from 'formik';
import { VscAdd } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

export default function ContactForm() {
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
      <Form className={css.form}>
        <label>
          <Field
            name="name"
            type="text"
            className={css.input}
            placeholder="Contact name"
          />
        </label>
        <label>
          <Field
            name="tel"
            type="text"
            className={css.input}
            placeholder="Telephone number"
          />
        </label>
        <button type="submit" className={css.btn}>
          <VscAdd className={css.icon} />
          Add
        </button>
      </Form>
    </Formik>
  );
}
