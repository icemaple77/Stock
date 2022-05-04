import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/App.css";
import Home from "../Pages/Home";
import Stocks from "../Pages/Stocks";
import PriceHistory from "../Pages/History";
import GetFooter from "../Components/Footer";
import logo from "../Images/logo.png";
import SearchHistory from "./SearchHistory";
function NavigationBar() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stocks">Stocks</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Have a nice day!</Nav.Link>
          </Nav>
          <SearchHistory />
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/history/:symbol" element={<PriceHistory />} />
      </Routes>
      <GetFooter />
    </Router>
  );
}

export default NavigationBar;
