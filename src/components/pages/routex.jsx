import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Posts } from "./pages"
import { PostDetails } from "../post"

const AppRouts= () =>{
    return(
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Posts/>}/>
        <Route exact path="/post/:id" element={<PostDetails/>}/>
        
    </Routes>
    </BrowserRouter>
)
}

export {AppRouts}