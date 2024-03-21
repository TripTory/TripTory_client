import React, {useState ,useRef} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileInput = useRef(null);

  const fileSelectedHandler = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return(
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={fileSelectedHandler}
        style={{display:"none"}}
        ref={fileInput}
      />
      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          overflow: "hidden",
          // margin: "0 auto",
          // border: "1px solid #ccc",
        }}
        onClick={() => fileInput.current.click()}
      >
        {previewUrl?(
          <img
            src={previewUrl}
            alt="Preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <span style={{ color: "#888", fontSize: "24px" }}>+</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
