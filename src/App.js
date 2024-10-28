
import "./App.css";
import React, { useState } from "react";
import quizData from "./quizData.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./welcome";
import Quiz from "./Quiz";

function App() {                                                
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/Quiz" element={<Quiz />}></Route>                        /*the calling function for the quiz and welcome page component is provided inside the route path*/
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
