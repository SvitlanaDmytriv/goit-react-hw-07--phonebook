import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import { addContact } from '../../redux/contacts/contactsOperations';
import { XLg } from 'react-bootstrap-icons';
import Button from '../Button/Button';
import s from './ContactForm.module.css';

function ContactForm({ toggleModall }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsAll = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactСomparison = contactsAll.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (contactСomparison) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
    setName('');
    setNumber('');
    toggleModall();
  };

  return (
    <div className={s.containerForm}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>Name </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          autoComplete="on"
        />

        <label className={s.label}>Number</label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          autoComplete="on"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />

        <Button className={s.button} type="submit">
          Add contact
        </Button>
      </form>
      <Button className={s.buttonClose} type="button" onClick={toggleModall}>
        <XLg width="15" height="15" className={s.icon} />
      </Button>
    </div>
  );
}

ContactForm.propTypes = {
  contactsAll: PropTypes.array,
  add: PropTypes.func,
};

export default ContactForm;
