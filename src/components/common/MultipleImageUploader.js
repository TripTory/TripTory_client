import React, { useState, useRef } from "react";
import styled from "styled-components";

const Uploader = () => {
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      const fileType = e.target.files[0].type.split("/")[0];
      setFiles((prevFiles) => [
        ...prevFiles,
        { fileObject: e.target.files[0], preview_URL: fileReader.result, type: fileType },
      ]);
    };
  };

  // const deleteImage = (index) => {
  //   const updatedFiles = [...files];
  //   updatedFiles.splice(index, 1);
  //   setFiles(updatedFiles);
  // };

  return (
    <div className="uploader-wrapper">
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        onClick={(e) => {
          e.target.value = null;
        }}
        style={{ display: "none" }}
        ref={inputRef} // inputRef를 input 요소에 연결
      />

      <ImageUploadDiv>
        <ImgUploadBtn
          variant="contained"
          onClick={() => inputRef.current && inputRef.current.click()} // inputRef가 null인지 확인 후 click 메소드 호출
        >
          Preview
        </ImgUploadBtn>
        <Slider>
          {Array.isArray(files) &&
            files.map((file, index) => (
              <div key={index}>
                <div className="file-wrapper">
                  <UploadedImage src={file.preview_URL} />
                </div>
                {/* <DeleteBtn variant="contained" onClick={() => deleteImage(index)}>
                  Delete
                </DeleteBtn> */}
              </div>
            ))}
        </Slider>
      </ImageUploadDiv>
    </div>
  );
};

const ImageUploadDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
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
`;

const UploadedImage = styled.img`
  border-radius: 0.8rem;
  height: 7rem;
  width: 7rem;
  margin: 0.5rem;
`;

const DeleteBtn = styled.button`
  background-color: #eeeeee;
  border: none;
  border-radius: 0.8rem;
  height: 3rem;
  width: 7rem;
  margin-top: 0.5rem;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  overflow: auto;
`;

export default Uploader;
