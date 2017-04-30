import React, { PropTypes } from 'react';

function Title(props) {
  return (
    <h2 className="header center orange-text">
      {props.children}
    </h2>
  );
}

Title.propTypes = {
  children: PropTypes.element,
};

Title.defaultProps = {
  children: null,
};

export default Title;
