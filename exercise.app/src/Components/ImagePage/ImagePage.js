import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import "./imagePage.css"

function ImagePage({ images }) {
  const params = useParams();

  const [showImage, setShowImage] = useState({});

  const api_url = "https://products-api-01.herokuapp.com/api/products";

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(api_url);
      const images = data.data;
      images.map((image) => {
        if (image._id === params.id) {
          console.log(image);
          setShowImage(image);
        }
      });
    };
    apiCall();
  }, [showImage]);

  return (
    <div>
      <div className="image-div">
        <img
          src={showImage.imgURL}
          alt={showImage.name}
        />
        <div className="product-info-div">
          <h3>{showImage.name}</h3>
          <h2>${showImage.price}</h2>
          <p>{showImage.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ImagePage;
