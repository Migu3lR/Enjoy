import React, { PropTypes } from 'react';
import styles from './Title.css';

function Title(props) {
  return (
    <h1 className={styles.title}>
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
