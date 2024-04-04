import React, { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import Default from "../../assets/images/profilavatar.svg";

const ProfilUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileInput = useRef(null);

  const fileSelectedHandler = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
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
            src={previewUrl}
            alt="Preview"
            style={{
              width: "12rem",
              height: "12rem",
              objectFit: "cover",
            }}
            onClick={() => fileInput.current.click()}
          />
        ) : (
          <ProfilAvatar alt="default" src={Default} />
        )}
      </div>
    </StProfilUploader>
  );
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
