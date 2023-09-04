import Image, { StaticImageData } from "next/image";
import React from "react";
import "../styles/component.css";
import { P3 } from "./helper";

const ImageDescription = ({
  image,
  imageHeight,
  heading,
  description,
  no_description = false,
}: {
  image: StaticImageData;
  imageHeight?: string;
  heading: string;
  description: string;
  no_description?: boolean;
}) => {
  return (
    <div className="history-container">
      <P3 text={heading} color="primary" fontWeight="600" />
      <div>
        <Image
          style={{
            height: imageHeight,
          }}
          src={image}
          alt="profile"
        />
        {!no_description ? <P3 text={description} /> : null}
      </div>
    </div>
  );
};

export default ImageDescription;
