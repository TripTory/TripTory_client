import React, {useState, useEffect} from "react";
import styled from "styled-components";
import DiaryListItem from "./DiaryListItem";
import axios from "axios";
import { PropTypes } from "prop-types";

export default function TripTable(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   let completed = false;

  // eslint-disable-next-line func-style
  //   async function get() {
  //     const result = await axios.get(
  //       `${process.env.REACT_APP_SERVER_URL}/travel/${props.data.}`,
  //       { withCredentials: true },
  //     );
  //     if (!completed) {
  //       setData(result.data.travels);
  //     }
  //     setLoading(true);
  //   }
  //   get();
  //   return () => {
  //     completed = true;
  //   };
  // }, []);

  return (
    <StTripTable>
      {props.data.map((it)=> {
        return <DiaryListItem key={it._id} data={it}/>;
      })}
    </StTripTable>
  );
}

TripTable.propTypes = {
  data: PropTypes.node.isRequired,
};

const StTripTable = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  scrollbar-width: none;
`;
