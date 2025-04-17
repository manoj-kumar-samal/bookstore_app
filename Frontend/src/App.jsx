
import Login from "./components/login";
import Register from "./components/register";
import Coursess from "./coursess/coursess";
import Home from "./home/home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/course" element={<Coursess/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </div>
  )
}