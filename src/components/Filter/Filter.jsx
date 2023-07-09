import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from '../../redux/contactSlice';
import { getFilter } from '../../redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        className={css.filter_input}
        value={filter}
        onChange={e => dispatch(searchContact(e.target.value))}
        type="text"
      />
    </label>
  );
};
