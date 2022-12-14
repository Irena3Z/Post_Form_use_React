import React from "react";
import { Routes,Route } from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";

const AppRouter = () => {
    return(
        <Routes>
            <Route path='/about' element={<About />}></Route>
            <Route exact path='/posts' element={<Posts />}></Route>
            
        </Routes>
  

    )
}
export default AppRouter;