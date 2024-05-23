import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import CancelIcon from "@mui/icons-material/Cancel";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PropTypes from "prop-types";

const Uploader = ({ onFilesChange, files=[], setFiles }) => {
  const inputRef = useRef(null);

  const saveImage = (e) => {
    e.preventDefault();
    onFilesChange(files);

    if (files.length >= 10) {
      return;
    }
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
          disabled={files.length >= 10}
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

Uploader.propTypes = {
  setFiles: PropTypes.node.isRequired,
  files: PropTypes.node.isRequired,
  onFilesChange: PropTypes.node.isRequired,
};

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
export default Uploader;
