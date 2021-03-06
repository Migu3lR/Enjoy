import React, { PropTypes } from 'react';

function Select(props) {
  return (
    <div className="input-field">
      <select
        id={props.name}
        name={props.name}
        value={props.selectedOption}
        onChange={props.controlFunc}
        required={props.required}
      >
        <option value="" disabled selected>{props.placeholder}</option>
        {props.options.map(opt => (
          <option
            key={opt}
            value={opt}
          >
            {opt}
          </option>
          ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  selectedOption: PropTypes.string,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.boolean,
};

Select.defaultProps = {
  selectedOption: '',
  placeholder: '',
  required: false,
};

export default Select;
