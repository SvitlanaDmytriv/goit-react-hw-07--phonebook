import PropTypes from 'prop-types';

export default function Button({ className, type, onClick = null, children }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.elementType,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
