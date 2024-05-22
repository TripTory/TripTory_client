import React, { useState, useEffect } from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import TripListItem from "./TripListItem";
import axios from "axios";

export default function TripList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  // const [tripInfo, setTripInfo] = useState({ _id:"", startdate:"", enddate:"", invited:[], ivtoken:"", location: {}, title:"", travelimg:"" });
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
        setUrl(result.data.travelUrls);
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
      {data.map((it,index) => {
        return <TripListItem key={it._id} data={it} url={url[index]}/>;
      })}
    </StTripList>
  );
}

const StTripList = styled(List)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
