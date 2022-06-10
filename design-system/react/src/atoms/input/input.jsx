import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({id, placeholder, onData, isValid, type, label }) => {
  function onInput(InputEvent){
      console.log("input.onInput", InputEvent);
      if(typeof onData === "function"){
      onData(InputEvent.target.value);
      }
  }

  const message = isValid ? "Valore corretto" : "Valore Errato"
  return (
    <>
    <input id={id}
      placeholder={placeholder}
      onInput={onInput}
      type={type}
    >
    </input>
    {label===undefined? null : <label htmlFor={id}>{label}</label>}
    {isValid === undefined ? null : message}
    </>

  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onData: PropTypes.func,
  isValid: PropTypes.bool,
  type: PropTypes.string,
  label : PropTypes.string
};

Input.defaultProps = {
  onData: undefined,
  type: 'text',
  isValid: undefined,
  placeholder : undefined,
  label : undefined
};