import styled from "styled-components";
import React from "react";
import SelectDateSingle from "../components/common/SelectDateSingle";


const DiaryWritePage = () => {
  return <div>
    <div>
      {/* <InputBox placeholder="날짜를 선택하세요" /> */}
      <SelectDateSingle></SelectDateSingle>
      <InputBox placeholder="장소를 검색하세요" />
    </div>

    <DiaryDiv>
      <TitleBox placeholder="제목을 입력하세요" />
      <ContentBox type="text" placeholder="내용을 입력하세요" maxLength={1000}/>
    </DiaryDiv>
  </div>;
};

const InputBox = styled.input`
  background-color: none;
  width: 70%;
  border: none;
  font-size: 15px;
  border-bottom: solid #bfbfbf 1px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
`;

const TitleBox = styled.input`
  display: flex;
  background-color: none;
  width: 92%;
  border: none;
  font-size: 15px;
  border-bottom: solid #AACCD2 1px;
  margin: auto;
  margin-top: 2rem;
  padding-bottom: 1rem;
  &::placeholder {
    color: #bfbfbf;
  }
`;

const ContentBox = styled.textarea`
  display: flex;
  background-color: none;
  width: 92%;
  height: 45rem;
  border: none;
  font-size: 15px;
  margin: auto;
  margin-top: 1rem;
  &::placeholder {
    color: #bfbfbf;
  }
`;

const DiaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: none;
  font-size: 15px;
  color: #BFBFBF;
  border: 1px solid #AACCD2;
  border-radius: 1.8rem;
  margin-top: 3rem;
  margin-left: 8%;
  margin-right: 8%;
`;

export default DiaryWritePage;
