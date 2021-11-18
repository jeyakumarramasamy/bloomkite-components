import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss'

const BUTTON_TYPES = {
  PRIMARY: 'primary',
  LINK: 'link',
  DEFAULT: 'default',
};

const Button = (props) => {
  const { label, type, onClick } = props;
  const btnClasses = cx(
    styles.bloomkiteBtn,
    {
      [styles.primaryBtn]: type === BUTTON_TYPES.PRIMARY,
      [styles.linkBtn]: type === BUTTON_TYPES.LINK,
    });
  return (
    <button
      onClick={onClick}
      className={btnClasses}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: BUTTON_TYPES.PRIMARY,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
