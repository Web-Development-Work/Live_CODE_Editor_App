import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import WebEditor from "./Components/WebEditor";
import MarkdownEditor from "./Components/MarkdownEditor";
import "./App.css";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + '/'} element={<Home/>}  />
        <Route exact path="/web" element={<WebEditor />} />
        <Route exact path= "/markdown" element={<MarkdownEditor/>} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
