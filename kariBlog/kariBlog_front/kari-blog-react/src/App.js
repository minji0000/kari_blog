import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap css 적용
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './App.js';
import Home from "./pages/Home/Home";

function Main () {
  return (
    <>
      <header />
      <Routes>
        <Route path="/" element = {<Home />} />
      </Routes>
    </>
  );
}

function App () {
  return <Main />;
}

export default App;
