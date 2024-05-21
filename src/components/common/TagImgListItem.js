import styled from "styled-components";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import tagData from "../../data/TagData.js";

export default function TagImgListItem({ tagName }) {
  const [textColor, setTextColor] = useState("black"); // Default text color

  const tag = tagData.tags.find((tag) => tag.tagName === tagName);
  const firstImagePath = tag && tag.imagePaths.length > 0 ? tag.imagePaths[0] : null;

  useEffect(() => {

    const getAverageColor = (imgElement) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(imgElement, 0, 0);

      const imageData = ctx.getImageData(0, 0, imgElement.width, imgElement.height);
      const pixels = imageData.data;
      let r = 0,
        g = 0,
        b = 0;

      for (let i = 0; i < pixels.length; i += 4) {
        r += pixels[i];
        g += pixels[i + 1];
        b += pixels[i + 2];
      }

      const pixelCount = pixels.length / 4;
      const avgR = Math.round(r / pixelCount);
      const avgG = Math.round(g / pixelCount);
      const avgB = Math.round(b / pixelCount);

      const luminance = (0.299 * avgR + 0.587 * avgG + 0.114 * avgB) / 255;

      setTextColor(luminance < 0.5 ? "white" : "black");
    };

    if (firstImagePath) {
      const img = new Image();
      img.src = firstImagePath;
      img.onload = () => {
        getAverageColor(img);
      };
    }
  }, [tagName]);

  return (
    <Link to={`/tag/${tagName}`} style={{ width: "100%", height: "100%" }}>
      <StTagImgListItem>
        <ListItem
          sx={{
            width: "100%",
            height: "100%",
            padding: "0.2rem 0.6rem 0.2rem 0.6rem",
          }}
        >
          <ImgDiv style={{ backgroundImage: `url(${firstImagePath})`}}>
            <TagP># {tagName}</TagP>
          </ImgDiv>
        </ListItem>
      </StTagImgListItem>
    </Link>
  );
}

TagImgListItem.propTypes = {
  tagName: PropTypes.string.isRequired,
};

const StTagImgListItem = styled.div`
  width: 100%;
  height: 100%;
`;

const ImgDiv = styled.div`
  border-radius: 1rem;
  width: 15rem;
  height: 100%;
  padding: 1.3rem;
`;

const TagP = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bolder;
  border: 1px red;
  border-radius: 1.5rem;
  background-color: white;
  width: auto;
  max-width: 100%;
  height: 2.4rem;
  padding-left: 0.5rem;
  padding-right: 0.6rem;
  padding-top: 0.5rem;

`;
