import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from './ContactList.module.css';
import { fetchContacts, deleteContact } from '../../redux/operations';
import {
  getIsLoading,
  getError,
  contactsToRender,
} from '../../redux/selectors';

export const ContactList = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(contactsToRender);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {contacts.map(({ id, contact: { name, number } }) => {
        return (
          <li className={css.item} key={id}>
            <span className={css.item_name}>{name}:</span>
            <span className={css.item_phone}>{number}</span>
            <button onClick={() => dispatch(deleteContact(id))} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
