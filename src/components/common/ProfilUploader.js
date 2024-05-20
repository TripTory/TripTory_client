import React, { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import Default from "../../assets/images/profilavatar.svg";
import PropTypes from "prop-types";

const ProfilUploader = ({ onFileSelect }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInput = useRef(null);

  const fileSelectedHandler = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl({
          fileObject: file,
          preview_Url: reader.result,
          type: file.type
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <StProfilUploader>
      <input
        type="file"
        accept="image/*"
        onChange={fileSelectedHandler}
        style={{ display: "none", width: "12rem", height: "12rem" }}
        ref={fileInput}
      />
      <div
        style={{
          width: "11rem",
          height: "11rem",
          borderRadius: "100%",
          overflow: "hidden",
        }}
        onClick={() => fileInput.current.click()}
      >
        {previewUrl ? (
          <img
            src={previewUrl.preview_Url}
            alt="Preview"
            style={{
              width: "12rem",
              height: "12rem",
              objectFit: "cover",
            }}
          />
        ) : (
          <ProfilAvatar alt="default" src={Default} />
        )}
      </div>
    </StProfilUploader>
  );
};

ProfilUploader.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
};

const StProfilUploader = styled.div`
  margin-bottom: 1.5rem;
`;

const ProfilAvatar = styled(Avatar)`
  width: 100%;
  height: 100%;
  object-fit: "cover";
`;

export default ProfilUploader;
