import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */

export const input = ({placeholder, onData, isValid, type})=>{
  function onInput(InputEvent){
    console.log("input.onInput", InputEvent);
    if(typeof onData == "function"){
      onData(InputEvent.target.value);
    }
  }
  const message = isValid ? "Valore buono" : "Valore non buono"
  return(
    <div><input
    placeholder={placeholder}
    onInput={onInput}
    type={type}
    >
    </input>
    {message}
    </div>
  );
}

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
