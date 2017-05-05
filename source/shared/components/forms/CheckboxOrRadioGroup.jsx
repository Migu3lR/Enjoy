import React, { PropTypes } from 'react';

function CheckboxOrRadioGroup(props) {
  return (
    <div>
      <label className="form-label">{props.title}</label>
      <div className="checkbox-group">
        {props.options.map(opt => (
          <label key={opt} className="form-label capitalize">
            <input
              className="form-checkbox"
              name={props.setName}
              onChange={props.controlFunc}
              value={opt}
              checked={props.selectedOptions.indexOf(opt) > -1}
              type={props.type}
            /> {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

CheckboxOrRadioGroup.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  setName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  selectedOptions: PropTypes.arrayOf(
    PropTypes.string,
  ),
  controlFunc: PropTypes.func.isRequired,
};

CheckboxOrRadioGroup.defaultProps = {
  selectedOptions: [],
};

export default CheckboxOrRadioGroup;
