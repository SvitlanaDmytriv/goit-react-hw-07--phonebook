// Redux Toolkit
import { PersonXFill } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Button from '../Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsAction';

function ContactList() {
  const dispatch = useDispatch();
  const contactsAll = useSelector(state => state.contacts.items);
  const value = useSelector(state => state.contacts.filter);

  const deleteItem = id => dispatch(deleteContact(id));

  const filterContacts = () => {
    const normalizedFilter = value.toLowerCase();

    return contactsAll.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = filterContacts();

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={s.listItem}>
          <div className={s.contactItem}>
            <span className={s.contact}>{name} :</span>
            <span className={s.contact}>{number}</span>
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

//Redux

// import { connect } from "react-redux";
// import s from "./ContactList.module.css";
// import {deleteContact} from "../../redux/contactsActions";

// function ContactList({ contactsAll, deleteItem }) {
//
//   return (
// <ul className={s.list}>
//   {contactsAll.map(({ name, number, id }) => (
//     <li key={id} className={s.listItem}>
//       <span className={s.contact}>{name} :</span>
//       <span className={s.contact}>{number}</span>
//       <Button
//         className={s.button}
//         type="button"
//         onClick={() => deleteItem(id)}
//       >
//         <PersonXFill width="20" height="30" className={s.icon} />
//       </Button>
//     </li>
//   ))}
// </ul>
//   );
// }

// function visibleContacts(contactsAll, value) {
//   const normalizedFilter = value.toLocaleLowerCase();
//   return contactsAll.filter((contact) =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter)
//   );
// }

// const mapStateToProps = ({ contacts: { items, filter } }) => {
//   console.log(filter);
//   return {
//     contactsAll: visibleContacts(items, filter),
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (id) => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
