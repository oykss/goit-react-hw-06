import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ id, name, tel }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{tel}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
