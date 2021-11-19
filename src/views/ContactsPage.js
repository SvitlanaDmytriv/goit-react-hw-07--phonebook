import { useState } from 'react';

import ContactsSection from '../component/ContactsSection/ContactsSection';

import ContactForm from '../component/ContactForm/ContactForm';
import Modal from '../component/Modal/Modal';

export default function ContactsPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModall = () => {
    setShowModal(prevState => !prevState);
  };

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
