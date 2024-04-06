import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const SelectDateRange = ({ onDateChange, daterange }) => {
  const [dateRange, setDateRange] = useState( daterange? daterange : [null, null] );
  const [startDate, endDate] = dateRange;

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
        placeholderText="날짜를 선택하세요"
      />
    </StyledDatePicker>
  );
};
export default SelectDateRange;

SelectDateRange.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  daterange: PropTypes.array.isRequired,
};

const StyledDatePicker = styled.div`
  .react-datepicker-wrapper {
    width: 90%;
    display: block;
  }
  .react-datepicker__input-container {
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .react-datepicker__input-container input {
    background-color: none;
    border: none;
    width: 100%;
    font-size: 1.5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
