import PropTypes from 'prop-types';
import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ stateFilter, renderOnChange }) => {
  return (
    <>
      <input
        type="text"
        name="filter"
        className={css.input}
        value={stateFilter}
        onChange={renderOnChange}
        placeholder="Enter name"
      />
    </>
  );
};


// Те що було раніше, до Хуків //
// export class Filter extends Component {
//   render() {
//     return (
//       <>
//         <input
//           type="text"
//           name="filter"
//           className={css.input}
//           value={this.props.stateFilter}
//           onChange={this.props.renderOnChange}
//           placeholder='Enter name'
//         />
//       </>
//     );
//   }
// }

Filter.propTypes = {
  stateFilter: PropTypes.string,
  renderOnChange: PropTypes.func.isRequired,
};
