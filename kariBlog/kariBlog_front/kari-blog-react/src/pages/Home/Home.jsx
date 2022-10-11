import React from "react";
import Register from "../Register/Register";
import "./Home.css";
import LogoDog from './/logo_dog.jpg'
import Login from "../../components/Login/Login";
import BlogMap from "../Map/MapApi";



function Home() {
  return (
    <div className="main">
      <img id="logo_dog" className="container" src={LogoDog} />
      <Login></Login>
      <Register></Register>
      <BlogMap></BlogMap>

    </div>
  );
}

export default Home;