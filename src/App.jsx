import Home from "./components/home/Home"
import About from "./components/about/About"
import Sidebar from "./components/common/Sidebar"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Sidebar />
    </div>
  )
}

export default App
