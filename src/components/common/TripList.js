import React, { useState, useEffect } from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import TripListItem from "./TripListItem";
import TripData from "../../data/TripData.json";
import axios from "axios";

export default function TripList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    let completed = false;

    // eslint-disable-next-line func-style
    async function get() {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/travel`,
        { withCredentials: true },
      );
      if (!completed) {
        setData(result.data.travels);
      }
      setLoading(true);
    }
    get();
    return () => {
      completed = true;
    };
  }, []);
  return (
    <StTripList
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        height: "100%",
        scrollbarWidth: "none",
      }}
    >
      {data.map((it) => {
        return <TripListItem key={it._id} data={it} />;
      })}
    </StTripList>
  );
}

const StTripList = styled(List)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
