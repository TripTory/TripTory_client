import React, {useState ,useRef} from "react";
import PropTypes from "prop-types";
import { AiFillCamera } from "react-icons/ai";
// import axios from "axios";

const ImageUploader = ({onChange}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInput = useRef(null);
  const setFile = (e) => {};


  const fileSelectedHandler = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if(file){
      // const img = new FormData();
      // img.append("file", file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
        onChange(reader.result);
        // // setPreviewUrl(img);
        // onChange(img.data);

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
          width: "15rem",
          height: "15rem",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto",
          border: "0.1rem solid #ccc",
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
              backgroundColor: "#d9d9d9",
            }}
          >
            <AiFillCamera
              style={{
                color: "#545454",
                width: "3rem",
                height: "3rem",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

ImageUploader.propTypes = {
  onChange: PropTypes.func,
};

export default ImageUploader;
