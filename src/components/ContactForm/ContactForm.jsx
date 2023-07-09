import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { getContacts } from '../../redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const currentContacts = useSelector(getContacts);

  const handleAddContact = e => {
    e.preventDefault();
    const form = e.target.elements;

    const isDuplicate = () => {
      return currentContacts.some(
        ({ contact }) => contact.name === form.name.value
      );
    };

    const newContact = {
      id: nanoid(),
      name: form.name.value,
      number: form.number.value,
    };

    if (!isDuplicate()) {
      dispatch(addContact(newContact));
    } else {
      alert('That contact is on the list!');
    }

    e.target.reset();
  };

  return (
    <form onSubmit={handleAddContact} className={css.form}>
      <label>
        Name
        <input
          className={css.input}
          id={'nameInput'}
          type="text"
          name="name"
          pattern="^[a-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={css.input}
          id={'phoneInput'}
          type="tel"
          name="number"
          pattern="^[0-9]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.btn_add} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
