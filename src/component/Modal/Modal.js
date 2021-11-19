import s from './Modal.module.css';
import useEffect from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modalRoot');

export default function Modal({ children, toggleModall }) {
  // useEffect(() => {
  //   window.addEventListener('keydown', handleEscape);
  //   return () => {
  //     window.removeEventListener('keydown', handleEscape);
  //   };
  // });

  // const handleEscape = e => {
  //   if (e.code === 'Escape') {
  //     toggleModall();
  //   }
  // };

  const handleClose = e => {
    if (e.currentTarget === e.target) {
      toggleModall();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleClose}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot,
  );
}
