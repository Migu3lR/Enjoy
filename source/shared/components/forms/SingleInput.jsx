import React, { PropTypes } from 'react';

function SingleInput(props) {
  return (
    <div className="form-group">
      <label className="form-label">{props.title}</label>
      <input
        className="form-input"
        name={props.name}
        type={props.inputType}
        value={props.content}
        onChange={props.controlFunc}
        placeholder={props.placeholder}
      />
    </div>
  );
}

SingleInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string,
};

SingleInput.defaultProps = {
  placeholder: '',
};

export default SingleInput;
