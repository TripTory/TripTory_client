import React, {useState ,useRef} from "react";
import PropTypes from "prop-types";
import { AiFillCamera } from "react-icons/ai";

const ImageUploader = ({onChange, url}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(url);
  const fileInput = useRef(null);
  const setFile = (e) => {};


  const fileSelectedHandler = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
        onChange({
          fileObject: file,
          preview_URL: reader.result,
          type: file.type
        });

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
  url: PropTypes.string.isRequired,
};

export default ImageUploader;
