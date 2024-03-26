import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GoArrowLeft } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

const SearchPlacePage = () => {
  return (
    <div>
      <SearchBoxContainer>
        <GoBack />
        <InputBox placeholder="어디로 떠날까요?" />
        <SearchIcon></SearchIcon>
      </SearchBoxContainer>
    </div>
  );
};

export default SearchPlacePage;

const SearchBoxContainer = styled.div`
  width: 98%;
  height: 50px;
  border-bottom: solid #bfbfbf 1px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const GoBack = styled(GoArrowLeft)`
  width: 45px;
  height: 45px;
  padding: 3px;
  color: #016360;
  margin: 3px 3px 3px 5px;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 0.2rem;
  margin: 0.3rem 0rem 0rem 0rem;
  border: none;
  font-size: 1.5rem;
`;

const SearchIcon = styled(IoIosSearch)`
  width: 45px;
  height: 45px;
  padding: 0.3rem 0.5rem 0.3rem 0.3rem;
  color: #016360;
  margin: 3px 3px;
`;
