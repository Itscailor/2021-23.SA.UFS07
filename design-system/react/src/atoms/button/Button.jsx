import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */



export const Button = ({ label, onClick,type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: undefined,
  type:'button',
};
