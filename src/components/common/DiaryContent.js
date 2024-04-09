import React, { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import PropTypes from "prop-types";
import { IoMdPin } from "react-icons/io";
import Karina from "../../assets/images/karina.png";
import jsonData from "../../data/DiaryInfoData.json";

const DiaryContent = () => {
  return (
    <ContentContainer>
      오늘은 바다에 갔다. 근데 해변에서 핸드폰을 잃어버려서 너무 속상했다.
      하지만 찾아서 다행이다. 너무나 즐거운 하루였다. 오늘은 바다에 갔다. 근데
      해변에서 핸드폰을 잃어버려서 너무 속상했다. 하지만 찾아서 다행이다. 너무나
      즐거운 하루였다. 오늘은 바다에 갔다. 근데 해변에서 핸드폰을 잃어버려서
      너무 속상했다. 하지만 찾아서 다행이다. 너무나 즐거운 하루였다.
      오늘은 바다에 갔다. 근데 해변에서 핸드폰을 잃어버려서 너무 속상했다.
      하지만 찾아서 다행이다. 너무나 즐거운 하루였다. 오늘은 바다에 갔다. 근데
      해변에서 핸드폰을 잃어버려서 너무 속상했다. 하지만 찾아서 다행이다. 너무나
      즐거운 하루였다. 오늘은 바다에 갔다. 근데 해변에서 핸드폰을 잃어버려서
      너무 속상했다. 하지만 찾아서 다행이다. 너무나 즐거운 하루였다.
    </ContentContainer>
  );
};

export default DiaryContent;

const ContentContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 2rem;
  line-height: 130%;
  font-size: 1.8rem;
`;
