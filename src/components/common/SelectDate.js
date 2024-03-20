import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectDate = () => {
  const [dateRange, setDateRange] = useState([null,null]);
  const [startDate, endDate] = dateRange;
  return(
    <DatePicker
      dateFormat="yyyy.MM.dd"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      inClearable={true}
    />
  );
};
export default SelectDate;
