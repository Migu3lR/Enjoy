import React, { PropTypes } from 'react';

function Title(props) {
  return (
    <h1 className="header center orange-text">
      {props.children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.element,
};

Title.defaultProps = {
  children: null,
};

export default Title;
