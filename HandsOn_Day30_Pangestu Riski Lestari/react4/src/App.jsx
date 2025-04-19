import Home from "./pages/home";
import Login from "./pages/login";
import MenuDetail from "./pages/menuDetail";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./pages/profile";
import Upload from "./pages/upload";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Pokemon from "./pages/pokemon";
function App (){

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/login" element ={<Login/>} />
        <Route path="/menu/:id" element ={<MenuDetail/>} />
        <Route path="/profile" element = {<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/pokemon" element = {<Pokemon/>}/>
        <Route path="/upload" element = {<Upload/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;