import React, { PropTypes } from 'react';

import css from './CheckboxOrRadioGroup.css';

function CheckboxOrRadioGroup(props) {
  let id = 0;
  return (
    <div className="input-field">
      <label htmlFor={props.name}>{props.title}</label>
      <div className="checkbox-group">
        {props.options.map((opt) => {
          id += 1;
          return (
            <p key={`ipt-${id}`} className={css.pCheck}>
              <input
                className="form-checkbox"
                name={props.name}
                onChange={props.controlFunc}
                value={opt}
                id={`ipt-${id}`}
                checked={props.selectedOptions.indexOf(opt) > -1}
                type={props.type}
              />
              <label htmlFor={`ipt-${id}`} className={`capitalize ${css.labelCheck}`}>{opt}</label>
            </p>
          );
        })}
      </div>
    </div>
  );
}

CheckboxOrRadioGroup.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  name: PropTypes.string.isRequired,
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
