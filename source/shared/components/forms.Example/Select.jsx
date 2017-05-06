import React, { PropTypes } from 'react';

function Select(props) {
  return (
    <div className="form-group">
      <select
        name={props.name}
        value={props.selectedOption}
        onChange={props.controlFunc}
        className="form-select"
      >
        <option value="">{props.placeholder}</option>
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
};

Select.defaultProps = {
  selectedOption: '',
  placeholder: '',
};

export default Select;
