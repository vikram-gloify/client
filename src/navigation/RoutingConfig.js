import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../page/Home/Home"

const RoutingConfig = () => {
  return (
    <Router>
    <Routes>
        <Route  path="/" exact element={<Home/>}/>
    </Routes>
      
    </Router>
  )
}

export default RoutingConfig
