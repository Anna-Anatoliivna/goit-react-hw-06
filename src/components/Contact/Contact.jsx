import { useDispatch } from 'react-redux';
import styles from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/contactsSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.listItem}>{name}</li>
        <li className={styles.listItem}>{number}</li>
      </ul>
      <button className={styles.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
