import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from "./Pages/Profile";
import User from "./Pages/User"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile/>}/>
      <Route path="/:id" element={<User />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
