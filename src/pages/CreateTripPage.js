import styled from "styled-components";
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
      <Title>어떤 여행을 만들까요?</Title>
      <EmptyContainer/>
      <div>
        <ImageUploader/>
      </div>
      <EmptyContainer/>
      <div></div>
      <InputContainer>
        <Label>여행 이름</Label>
        <Input name="tripName" value={state.tripName} onChange={handleChange} placeholder="여행 이름"/>
      </InputContainer>
      <InputContainer>
        <Label>여행 일정</Label>
        <SelectDate/>
      </InputContainer>
      <InputContainer>
        <Label>여행 장소</Label>
        <Input name="tripPlace" value={state.tripPlace} onChange={handleChange} placeholder="여행 장소"/>
      </InputContainer>
      <Button>여행 떠나기</Button>
    </div>
  );
};
export default CreateTripPage;

const Title = styled.h1`
  color: #016360;
  font-weight: 900;
  font-size: 23px;
  padding: 30px 20px 30px;
`;

const Button = styled.button`
  background-color: #2eaba1;
  width: 90%;
  height: 4rem;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3rem;
  right: 5%;
  left: 5%;
`;

const Label = styled.div`
  font-size: 15px;
  width: 90%;
  height: 35px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 0px;
  font-weight: bolder;
`;

const EmptyContainer = styled.div`
  width: 100%;
  height: 3rem;
`;

const InputContainer = styled.div`
  margin: 2rem;
`;
