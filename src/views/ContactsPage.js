import { useState, useEffect } from 'react';
import { fetchContactsAll } from '../redux/contacts/contactsOperations';
import ContactsSection from '../component/ContactsSection/ContactsSection';
import { useDispatch } from 'react-redux';
import ContactForm from '../component/ContactForm/ContactForm';
import Modal from '../component/Modal/Modal';

export default function ContactsPage() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModall = () => {
    setShowModal(prevState => !prevState);
  };
  useEffect(() => {
    dispatch(fetchContactsAll());
  }, []);
  return (
    <>
      {showModal && (
        <Modal toggleModall={toggleModall}>
          <ContactForm toggleModall={toggleModall} />
        </Modal>
      )}

      <ContactsSection toggleModall={toggleModall} />
    </>
  );
}
