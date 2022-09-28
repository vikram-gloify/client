import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Home from '../page/Home/Home';

const RoutingConfig = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RoutingConfig;
