// Redux Toolkit
import { PersonXFill } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Button from '../Button/Button';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';

function ContactList() {
  const dispatch = useDispatch();

  const deleteItem = id => dispatch(deleteContact(id));

  const visibleContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, phone, id }) => (
        <li key={id} className={s.listItem}>
          <div className={s.contactItem}>
            <span className={s.contact}>{name} :</span>
            <span className={s.contact}>{phone}</span>
          </div>
          <Button
            className={s.button}
            type="button"
            onClick={() => deleteItem(id)}
          >
            <PersonXFill width="20" height="30" className={s.icon} />
          </Button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactsAll: PropTypes.array,
  value: PropTypes.string,
  deleteItem: PropTypes.func,
};

export default ContactList;
