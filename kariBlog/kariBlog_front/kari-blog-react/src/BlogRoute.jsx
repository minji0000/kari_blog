import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import RegisterForm from "./pages/Register/RegisterForm";

function BlogRoute() {
  return (
    <>
      <header />
      <Routes>
        <Route path="/" element = { <Home />} />
        <Route path="/register" element = { <RegisterForm />} />




      </Routes>




    </>
  );
}

export default BlogRoute;