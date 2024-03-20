import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const Input = ({name, value, onChange, placeholder}) => {

  return (
    <div>
      <input
        type = "text"
        name = {name}
        value = {value}
        onChange = {onChange}
        placeholder = {placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
