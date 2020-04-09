/* eslint-disable react/button-has-type */

import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/button.module.css';

const MyCoolButton = ({ type, title, onClick }) => (
  <button
    type={type}
    className={styles.container}
    onClick={onClick}
  >
    {title}
  </button>
);

MyCoolButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

MyCoolButton.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default MyCoolButton;
