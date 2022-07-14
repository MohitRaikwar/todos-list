import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import App from "../App";
import NotFound from "./NotFound";

export default function MyRouter() {
  return (
    <Router>
      <Header title="MyTodosList" />
      <Routes>
        <Route path="/" element={<App />}  />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}
