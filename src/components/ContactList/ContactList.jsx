import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const { contacts } = useSelector(state => state.contacts);
  const { status } = useSelector(state => state.filters);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(status.toLowerCase().trim())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, tel }) => (
        <li key={id}>
          <Contact id={id} name={name} tel={tel} />
        </li>
      ))}
    </ul>
  );
}
