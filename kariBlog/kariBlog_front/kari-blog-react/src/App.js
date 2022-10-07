import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap css 적용
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './App.js';
import BlogRoute from "./BlogRoute.jsx";

function Main () {
  return (
    <div>
    <BlogRoute></BlogRoute>
    </div>
  );
}

function App () {
  return <Main />;
}

export default App;
