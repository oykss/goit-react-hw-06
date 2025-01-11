import { BsTelephone } from 'react-icons/bs';
import { VscAccount, VscChromeClose } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({ id, name, tel }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.wrap}>
      <div>
        <h3 className={css.info}>
          <VscAccount className={css.icon} />
          {name}
        </h3>
        <p className={css.info}>
          <BsTelephone className={css.icon} />
          {tel}
        </p>
      </div>
      <button onClick={handleDelete} className={css.btn}>
        <VscChromeClose className={css.icon} />
        Delete
      </button>
    </div>
  );
}
