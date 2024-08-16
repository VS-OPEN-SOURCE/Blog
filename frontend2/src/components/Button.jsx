/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, label, type = 'button', disabled = false, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
