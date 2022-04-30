import "../Styles/App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../Images/icon.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import CarouselBanner from "../Components/CarouselBanner";
function Home() {
  return (
    <div>
      <CarouselBanner />
      <Container>
        <Row>
          <h1 className="title">NAVIGATE</h1>
          <h3 className="title-small">Stock prices API Assessment 2 IFN666</h3>
        </Row>
        <div className="h50"></div>
        <Row>
          <Col>
            <div className="icon">
              <img src={icon} alt="Stocks" />
              <p className="h30"></p>
              <p className="context">
                Click on stocks to see the available companies.
              </p>
            </div>
          </Col>
          <Col>
            <div className="icon">
              <img src={icon2} alt="Stocks" />
              <p className="h30"></p>
              <p className="context">
                We also provide the quote for each stocks.
              </p>
            </div>
          </Col>
          <Col>
            <div className="icon">
              <img src={icon3} alt="Stocks" />
              <p className="h30"></p>
              <p className="context">
                History might help you to see the 100 days log of each stocks.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
