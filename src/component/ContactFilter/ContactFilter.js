// Redux Toolkit
import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsAction';
import { getFilter } from '../../redux/contacts/contactsSelectors';
function ContactFilter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const сhangeFilter = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={сhangeFilter}
      ></input>
    </label>
  );
}

ContactFilter.propTypes = {
  value: PropTypes.string,
  сhangeFilter: PropTypes.func,
};

export default ContactFilter;
