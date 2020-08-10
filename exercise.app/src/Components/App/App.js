import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import ImageCard from "../ImageCard/ImageCard";
import ImagePage from "../ImagePage/ImagePage";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

function App() {
  const [images, updateImages] = useState([]);
  const [searchText, updateSearchText] = useState("");

  const api_url = "https://products-api-01.herokuapp.com/api/products";

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(api_url);
      const imageData = data.data;
      const searchedImages = imageData.filter((image) =>
        image.name.toLowerCase().includes(searchText)
      );
      updateImages(searchedImages);
    };
    apiCall();
  }, [searchText]);

  return (
    <div>
      <nav className="nav-bar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className='page-title'>
            Products App
          </h1>
        </Link>
      </nav>
      <Route exact path="/">
        <SearchBar
          searchText={searchText}
          updateSearchText={updateSearchText}
        />
        <div className='image-container'
        >
          {images.map((image) => (
            <ImageCard
              imgURL={image.imgURL}
              productName={image.name}
              price={image.price}
              id={image._id}
              key={image._id}
            />
          ))}
        </div>
      </Route>
      <Route path="/product/:id">
        <ImagePage images={images} />
      </Route>
    </div>
  );
}

export default App;
