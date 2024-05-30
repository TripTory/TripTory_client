import React, { useState, useEffect } from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import TripListItem from "./TripListItem";
import axios from "axios";
import { useRecoilState } from "recoil";


export default function TripList() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  useEffect(() => {
    let completed = false;

    // eslint-disable-next-line func-style
    async function get() {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/travel`,
          { withCredentials: true },
        );
        if (!completed) {
          setData(result.data.travels);
          setUrl(result.data.travelUrls);
        }
      } catch (error) {
        if (!completed) {
          if(error.response.status===404){
            setData([]);
            setUrl([]);
          }else{
            console.log(error);
          }
        }
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
      {data && data.map((it,index) => {
        return <TripListItem key={it._id} data={it} url={url[index]}/>;
      })}
      {data.length===0 && <Emptydiv>여행을 추가해보세요!</Emptydiv>}
    </StTripList>
  );
}

const StTripList = styled(List)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Emptydiv = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  color: #e4e4e4;
  font-size: 2rem;
`;

