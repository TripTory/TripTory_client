import React, { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const SelectDateRange = ({ onDateChange }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const StyledDatePicker = styled.div`
    .react-datepicker-wrapper{
      width: 90%;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .react-datepicker__input-container{
      width: 100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .react-datepicker__input-container input {
      background-color: none;
      width: 100%;
      border: none;
      font-size: 15px;
      border-bottom: solid #bfbfbf 1px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  `;

  const handleDateChange = (update) => {
    setDateRange(update);
    onDateChange(update);
  };

  return (
    <StyledDatePicker>
      <DatePicker
        style={{
          border: "10px solid black",
        }}
        dateFormat="yyyy.MM.dd"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
        inClearable={true}
      />
    </StyledDatePicker>
  );
};
export default SelectDateRange;

SelectDateRange.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};
