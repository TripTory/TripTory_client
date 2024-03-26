import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputBox = styled.input`
  background-color: none;
  width: 90%;
  border: none;
  font-size: 15px;
  border-bottom: solid #bfbfbf 1px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Input = ({name, value, onChange, placeholder}) => {

  return (
    <div>
      <InputBox
        type = "text"
        name = {name}
        value = {value}
        onChange = {onChange}
        placeholder = {placeholder}
        autocomplete="off"
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
