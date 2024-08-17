import React from 'react';

import Home from "./pages/homepage";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HookTm from './pages/HookTm';
import "bootstrap/dist/css/bootstrap.css"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/hook' element={<HookTm/>}/>
      {/* added a comment */}
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
