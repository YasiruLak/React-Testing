
import '../App.css';
import React from "react";
import Login from "../pages/session/Login";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/Home";

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='login' element={<Login/>}/>
        {/*<Route path='flex-layout' element={<FlexBoxLayout/>}/>*/}
        {/*<Route path='grid-layout' element={<GridLayout/>}/>*/}
        {/*<Route path="*" element={<NotFound/>}/>*/}
      </Routes>
  );
}

export default App;
