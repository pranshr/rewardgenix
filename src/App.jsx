import Home from "./components/home/Home"
import About from "./components/about/About"
import Sidebar from "./components/common/Sidebar"
import Solutions from "./components/solutions/solutions"
import NotFound from "./components/common/NotFound"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Sidebar />
    </div>
  )
}

export default App
