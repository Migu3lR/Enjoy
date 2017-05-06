import React, { PropTypes } from 'react';

function SingleInput(props) {
  return (
    <div className="input-field">
      <label htmlFor={props.name} data-error="Error" data-success="">{props.title}</label>
      <input
        id={props.name}
        className={props.validate ? 'validate' : null}
        name={props.name}
        type={props.inputType}
        value={props.content}
        onChange={props.controlFunc}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}

SingleInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number', 'email', 'password']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  validate: PropTypes.bool,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

SingleInput.defaultProps = {
  placeholder: null,
  validate: false,
  required: false,
};

export default SingleInput;
