// Redux Toolkit
import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsAction';
function ContactFilter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

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

// Redux

// import PropTypes from "prop-types";
// import { connect} from "react-redux";
// import s from "./Filter.module.css";
// import {changeFilter} from "../../redux/contactsActions";

// function Filter({ value, сhangeFilter }) {
//   console.log(value);
// //   return (
//     <label className={s.label}>
//       Find contacts by name
//       <input
//         className={s.input}
//         type="text"
//         value={value}
//         onChange={сhangeFilter}
//       ></input>
//     </label>
//   );
// }

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   сhangeFilter: (e) => dispatch(changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
