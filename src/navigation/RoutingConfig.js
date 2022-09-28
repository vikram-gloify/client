import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Home from "../page/Home/Home"

const RoutingConfig = () => {
  return (
    <Router>
    <Routes>
        <Route  path="/" exact element={<Home/>}/>
    </Routes>
      <Footer/>
    </Router>
  )
}

export default RoutingConfig
