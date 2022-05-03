import "../Styles/App.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../Images/Banner.jpg";
import Banner2 from "../Images/Banner2.jpg";
import Banner3 from "../Images/Banner3.jpg";

function CarouselBanner() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner} alt="First slide" />
        <Carousel.Caption className="carouselcaption">
          <div className="jumbotron">
            <h1 className="display-4">Stock Price</h1>
            <p className="lead">Welcome to the Stock Market Portal</p>

            <p>Click on stocks to see the available companies.</p>
            <p className="lead">
              <a
                className="btn btn-outline-light btn-lg left-15"
                href="/stocks"
                role="button"
              >
                Stocks
              </a>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="First slide" />
        <Carousel.Caption className="carouselcaption">
          <div className="jumbotron">
            <h1 className="display-4">Stock Quote</h1>
            <p className="lead">Welcome to the Stock Market Portal</p>

            <p>We also provide the quote for each stocks.</p>
            <p className="lead">
              <a
                className="btn btn-outline-light btn-lg left-15"
                href="/stocks"
                role="button"
              >
                Stocks
              </a>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="First slide" />
        <Carousel.Caption className="carouselcaption">
          <div className="jumbotron">
            <h1 className="display-4">History Price</h1>
            <p className="lead">Welcome to the Stock Market Portal</p>
            <p>
              History might help you to see the 100 days log of each stocks.
            </p>
            <p className="lead">
              <a
                className="btn btn-outline-light btn-lg left-15"
                href="/stocks"
                role="button"
              >
                Stocks
              </a>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselBanner;
