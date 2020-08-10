import React from "react";
import { Link, Route, useParams } from "react-router-dom";
import './imageCard.css'
import { motion } from "framer-motion";

function ImageCard({ imgURL, productName, price, id }) {

  const params = useParams()

  return (
    <Link
      className="image-link"
      to={`/product/${id}`}
    >
      <motion.div
        whileHover={{ scale: 1.05, opacity: ".90" }}
        className="image-card"
      >
        <img
          src={imgURL}
          alt={`${productName}`}
        />
        <h3>
          {productName}
        </h3>
        <h2>
          ${price}
        </h2>
      </motion.div>
    </Link>
  );
}

export default ImageCard;
