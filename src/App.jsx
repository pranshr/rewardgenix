import Home from "./components/home/Home"
import About from "./components/about/About"
import Sidebar from "./components/common/Sidebar"
import Solutions from "./components/solutions/Solutions"
import Contact from "./components/contact/Contact"
import NotFound from "./components/common/NotFound"
import Technology from "./components/technology/Technology"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Sidebar />
    </div>
  )
}

export default App
