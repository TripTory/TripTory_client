import styled from "styled-components";
import { React, useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../assets/images/calendar.svg";
import Modal from "../components/common/Modal";
import { COLOR } from "../styles/color";
import BottomNav from "../layout/BottomNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import moment from "moment";
import { useRecoilState } from "recoil";
import { diaryIdState } from "../recoil/commonState";

import CancelIcon from "@mui/icons-material/Cancel";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const EditDiaryWritePage = () => {
  const { state } = useLocation();
  const [diaryId, setDiaryId] = useRecoilState(diaryIdState);
  const { diaryInfo } = state || {};

  const [startDate, setStartDate] = useState(diaryInfo?.date ? new Date(diaryInfo.date) : null);
  const [title, setTitle] = useState(diaryInfo?.title || "");
  const [content, setContent] = useState(diaryInfo?.content || "");
  const [files, setFiles] = useState(diaryInfo?.url || []);
  const [files2, setFiles2] = useState([]);
  const [imgmodified, setImgModified] = useState(false);

  const goToShowDiary = () => {
    navigate("/showdiary");
    closeModal();
  };

  const transformFiles = (filesArray) => {
    return filesArray.map((file) => ({ preview_URL: file }));
  };

  useEffect(() => {
    const transformedFiles = transformFiles(files);
    setFiles2(transformedFiles);
  }, []);

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const openCancelModal = () => {
    setIsCancelModalOpen(true);
  };
  const openSaveModal = () => {
    setIsSaveModalOpen(true);
  };

  const closeModal = () => {
    setIsCancelModalOpen(false);
    setIsSaveModalOpen(false);
  };

  const handleImageUpload = (preview) => {
    setImagePreview(preview);
  };

  const handleConfirm = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("date", moment(startDate).startOf("day").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"));
    formData.append("imgmodified", imgmodified);

    files2.forEach((file) => {
      formData.append("images", file.fileObject); // edit diary 시 수정한 이미지
    });

    const files2PreviewURLs = files2.map((file) => file.preview_URL || null);
    formData.append("originImage", files2PreviewURLs); // edit diary 시 수정이 아닌 원본 이미지


    axios.put(`http://localhost:5000/diary/${diaryId}`, formData, { withCredentials: true, headers: {"Content-Type": "multipart/form-data"} })
    .then((res) => {
      navigate("/showdiary");
    })
    .catch((error) => {
      console.log("에러", error);
    });
  };

  ///////////////////////////////

  const inputRef = useRef(null);

  const saveImage = (e) => {
    e.preventDefault();

    handleImageUpload(files);
    if (files2.length >= 10) {
      return;
    }
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      const fileType = e.target.files[0].type.split("/")[0];
      setFiles2((prevFiles) => [
        ...prevFiles,
        { fileObject: e.target.files[0], preview_URL: fileReader.result, type: fileType },
      ]);
      setImgModified(true);
    };
  };

  const deleteImage = (index) => {
    const updatedFiles = [...files2];
    updatedFiles.splice(index, 1);
    setFiles2(updatedFiles);
    setImgModified(true);
  };

  return <div>
    <div>
      <DateDiv>
        <CalenderImage src={calendar} />
        <StyledDatePicker>
          <DatePicker
            placeholderText="날짜를 선택하세요"
            selected={startDate}
            dateFormat="yyyy-MM-dd"
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
          />
        </StyledDatePicker>
      </DateDiv>
    </div>

    <DiaryDiv>
      <TitleBox
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ContentBox
        type="text"
        placeholder="내용을 입력하세요"
        maxLength={1000}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </DiaryDiv>

    <div className="uploader-wrapper">
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        onClick={(e) => {
          e.target.value = null;
        }}
        style={{ display: "none" }}
        ref={inputRef}
      />

      <ImageUploadDiv>
        <ImgUploadBtn
          variant="contained"
          onClick={() => inputRef.current && inputRef.current.click()}
          disabled={files2.length >= 10}
        >
          <CameraAltIcons />
          <UploadCount>{files2.length}/10</UploadCount>
        </ImgUploadBtn>
        <Slider>
          {Array.isArray(files2) &&
            files2.map((file, index) => (
              <div key={index}>
                <ImageDiv>
                  <UploadedImage src={file.preview_URL} />
                  <CancelIcons
                    onClick={() => deleteImage(index)} />
                </ImageDiv>
              </div>
            ))}
        </Slider>
      </ImageUploadDiv>
    </div>

    <BtnDiv>
      <CancelBtn onClick={openCancelModal}>취소</CancelBtn>
      <SaveBtn onClick={openSaveModal} disabled={!(startDate && title && content)} >저장</SaveBtn>
    </BtnDiv>

    {isCancelModalOpen && (
      <Modal
        content={
          <ContentDiv>
            작성을 취소하시겠습니까?
          </ContentDiv>
        }
        w="70%"
        h="15rem"
        buttons={
          <OkayDiv>
            <OkayBtn className="no" onClick={closeModal}>아니오</OkayBtn>
            <OkayBtn className="yes" onClick={goToShowDiary}>예</OkayBtn>
          </OkayDiv>
        }
      />
    )}

    {isSaveModalOpen && (
      <Modal
        content={
          <ContentDiv>
            일기를 저장할까요?
          </ContentDiv>
        }
        w="70%"
        h="15rem"
        buttons={
          <OkayDiv>
            <OkayBtn className="no" onClick={closeModal}>취소</OkayBtn>
            <OkayBtn className="yes" onClick={handleConfirm}>확인</OkayBtn>
          </OkayDiv>
        }
      />
    )}
    <BottomNav />
  </div>;
};

const DateDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: none;
  width: 80%;
  border: none;
  font-size: 15px;
  border-bottom: solid #bfbfbf 1px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
`;
const CalenderImage = styled.img`
  padding: 1.2%;
`;

const StyledDatePicker = styled.div`
  .react-datepicker-wrapper{
    width: 70%;
  }
  .react-datepicker__input-container{
    width: 100%;
  }
  .react-datepicker__input-container input {
    background-color: none;
    width: 100%;
    border: none;
    font-size: 15px;
    &::placeholder {
      color: #bfbfbf;
    }
  }
`;


const TitleBox = styled.input`
  display: flex;
  background-color: none;
  width: 92%;
  border: none;
  font-size: 15px;
  border-bottom: solid ${COLOR.MAIN_SKY} 1px;
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
  height: 37rem;
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
  border: 1px solid ${COLOR.MAIN_SKY};
  border-radius: 1.8rem;
  margin-top: 2.5rem;
  margin-left: 8%;
  margin-right: 8%;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  margin-top: 4%;
  margin-bottom: 5rem;
`;
const CancelBtn = styled.button`
  height: 4rem;
  width: 14.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: white;
  border: none;
  border-radius: 3rem;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.3);
  margin-right: 3%;
`;
const SaveBtn = styled.button`
  height: 4rem;
  width: 14.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  background-color: #2EABA1;
  border: none;
  border-radius: 3rem;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.4); 
  margin-left: 3%;
  background-color: ${(props) => props.disabled ? "rgba(46, 171, 161, 0.3)" : "${COLOR.MAIN_EMER}"}
`;
const OkayBtn = styled.button`
  height: 2.5rem;
  width: 10rem;
  font-size: 1.7rem;
  font-weight: 600;
  text-align: center;
  vertical-align: center;
  color: white;
  border: none;
  border-radius: 3rem;
  &.no {
    color: black;
    background-color: #D9D9D9;
    margin-right: 1rem;
  }
  &.yes {
    background-color: ${COLOR.MAIN_GREEN};
  }
`;
const OkayDiv = styled.div`
  margin-top: 3rem;
`;

const ContentDiv = styled.div`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 4rem;
`;

////////////////////////

const ImageUploadDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8.5rem;
  margin-top: 0.5rem;
  margin-left: 8%;
  margin-right: 8%;
`;

const ImgUploadBtn = styled.button`
  background-color: #eeeeee;
  border: none;
  border-radius: 0.8rem;
  height: 7rem;
  width: 7rem;
  margin-right: 0.5rem;
  min-width: 7rem;
  min-height: 7rem;
  color: ${COLOR.MAIN_GREEN};
  color: ${(props) => props.disabled ? "rgba(46, 171, 161, 0.3)" : "${COLOR.MAIN_GREEN}"}
`;

const UploadedImage = styled.img`
  border-radius: 0.8rem;
  height: 7rem;
  width: 7rem;
  margin: 0.5rem;
  object-fit: cover;
`;

const CancelIcons = styled(CancelIcon)`
  color: ${COLOR.MAIN_GREEN};
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: 0;
  right: 0;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  overflow: auto;
`;

const ImageDiv = styled.div`
  position: relative;
`;

const CameraAltIcons= styled(CameraAltIcon)`
  height: 3rem;
  width: 3rem;
`;

const UploadCount = styled.p`
  color: ${COLOR.MAIN_GREEN};
  font-weight: 500;
`;

export default EditDiaryWritePage;


