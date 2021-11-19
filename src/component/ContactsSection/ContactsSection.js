import PropTypes from 'prop-types';
import s from './ContactsSection.module.css';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactList from '../ContactList/ContactList';
import Button from '../Button/Button';
import { PlusCircleFill } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import {
  getFilteredContacts,
  getFilter,
  getContacts,
} from '../../redux/contacts/contactsSelectors';

export default function ContactsSection({ toggleModall }) {
  const contactsAll = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const visibleContacts = useSelector(getFilteredContacts);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Contacts</h2>
      <Button className={s.button} type="button" onClick={toggleModall}>
        <PlusCircleFill width="40" height="40" className={s.icon} />
      </Button>
      {contactsAll.length > 1 && <ContactFilter />}
      {contactsAll.length > 0 ? (
        <ContactList />
      ) : (
        <p className={s.text}>
          Contact list is empty. Add your first contact to the list.
        </p>
      )}

      {visibleContacts < 1 && filterValue !== '' && (
        <p className={s.text}>
          There is no contact with the name "{filterValue}" in the list
        </p>
      )}
    </div>
  );
}

ContactList.propTypes = {
  contactsAll: PropTypes.array,
  filterValue: PropTypes.string,
  toggleModall: PropTypes.func,
};
