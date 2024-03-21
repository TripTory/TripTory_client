import styled from "styled-components";
import { COLOR } from "../styles/color";
import React,{useState} from "react";
import Input from "../components/common/Input";
import SelectDate from "../components/common/SelectDate";
import ImageUploader from "../components/common/ImageUploader";

const CreateTripPage = () => {
  const [state, setState] = useState({
    tripName:"",
    tripPlace:"",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    });
  };

  return (
    <div className="CreateTripPage">
      <h1>어떤 여행을 만들까요?</h1>
      <div>
        <ImageUploader/>
      </div>
      <div>
        <p>여행이름</p>
        <Input name="tripName" value={state.tripName} onChange={handleChange} placeholder="여행 이름"/>
      </div>
      <div>
        <p>여행 일정</p>
        <SelectDate/>
      </div>
      <div>
        <p>여행 장소</p>
        <Input name="tripPlace" value={state.tripPlace} onChange={handleChange} placeholder="여행 장소"/>
      </div>
      <button>여행 떠나기</button>
    </div>
  );
};
export default CreateTripPage;
