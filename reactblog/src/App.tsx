import Navbar from "./pages/Header";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateNew";
import {Route, Routes} from "react-router-dom"; 

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreateBlog />}></Route>
        {/* <Route path="/about" element={<About/>}></Route> */}
      </Routes>
      {/* <Home/> */}
    </>
  )
}

export default App
