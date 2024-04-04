import React, { useState, useRef } from "react";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import CancelIcon from "@mui/icons-material/Cancel";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

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

  const deleteImage = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

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
        ref={inputRef}
      />

      <ImageUploadDiv>
        <ImgUploadBtn
          variant="contained"
          onClick={() => inputRef.current && inputRef.current.click()}
        >
          <CameraAltIcons />
          <UploadCount>{files.length}/10</UploadCount>
        </ImgUploadBtn>
        <Slider>
          {Array.isArray(files) &&
            files.map((file, index) => (
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
  fill: ${COLOR.MAIN_GREEN};
`;

const UploadCount = styled.p`
  color: ${COLOR.MAIN_GREEN};
  font-weight: 500;
`;
export default Uploader;
