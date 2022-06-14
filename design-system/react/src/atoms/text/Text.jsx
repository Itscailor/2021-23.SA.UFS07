import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({label}) => {
    return(
        <span> {label}</span>
    )
};
Text.PropTypes = {
    label: PropTypes.string.isRequired,
};
Text.defaultProps ={

};