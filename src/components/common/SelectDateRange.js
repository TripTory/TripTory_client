import React,{useState} from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";


const SelectDateRange = ({onDateChange}) => {
  const [dateRange, setDateRange] = useState([null,null]);
  const [startDate, endDate] = dateRange;

  const handleDateChange = (update) =>{
    setDateRange(update);
    onDateChange(update);
  };

  return(
    <DatePicker
      style={{
        border:"10px solid black",
      }}
      dateFormat="yyyy.MM.dd"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={handleDateChange}
      inClearable={true}
    />
  );
};
export default SelectDateRange;

SelectDateRange.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};
