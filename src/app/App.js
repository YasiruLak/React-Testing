
import '../App.css';
import React from "react";
import Login from "../pages/session/Login";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/Home";
import NotFound from "../pages/session/NotFound";
import Posts from "../pages/Posts";
import FlexBoxLayout from "../pages/Layouts/FlexBox";
import GridLayout from "../pages/Layouts/Grid";


function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='posts' element={<Posts/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='flex-layout' element={<FlexBoxLayout/>}/>
        <Route path='grid-layout' element={<GridLayout/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  );
}

export default App;
