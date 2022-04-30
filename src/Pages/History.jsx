import SearchApiHistory from "../API/ApiHistory";
import SearchApiQuote from "../API/ApiQuote";
import SearchBar from "../Components/SearchBar";
import Tables from "../Components/Tables";
import Charts from "../Components/Charts";
import MyDatePicker from "../Components/MyDatePicker";
import QuoteDisplay from "../Components/QuoteDisplay";
import symbolList from "./Stocks";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  ButtonToolbar,
  InputGroup,
  ButtonGroup,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";

function getQuoteInfo(data) {
  const dates = data.map((history) => history.date);
  const open = data.map((history) => history.open);
  const high = data.map((history) => history.high);
  const low = data.map((history) => history.low);
  const volumes = data.map((history) => history.volume);

  return {
    dates,
    open,
    high,
    low,
    volumes,
  };
}

function PriceHistory() {
  // const location = useLocation();
  // if (location.state.name === null) {
  //   location.state.name = "AMAT";
  // }
  // const symbol = location.state.name;
  const symbol = "AMAT";
  // console.log("120" + location.state.name);
  const [searchDate, setSearchDate] = useState("");
  // const [searchSymbol, setSearchSymbol] = useState("");

  const { loading, rowData, name, error } = SearchApiHistory(
    symbol,
    searchDate
  );
  const { dates, open, high, low, volumes } = getQuoteInfo(rowData);
  const { loadingQ, rowDataQ, errorQ } = SearchApiQuote(symbol);

  const columns = [
    {
      headername: "Date",
      field: "date",
      resizable: true,
      flex: 1,
      sortable: true,
      filter: true,
    },
    {
      headername: "Open",
      field: "open",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headername: "High",
      field: "high",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headername: "Low",
      field: "low",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headername: "Volume",
      field: "volume",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
  ];

  if (loading || loadingQ || rowData === undefined) {
    return <h1>Loading...</h1>;
  }
  if (error != null || errorQ) {
    return <h1>error...</h1>;
  } else {
    return (
      <div>
        <Container>
          <Row>
            <p className="title">History of {name}</p>
          </Row>
          <Row>
            <ButtonToolbar
              className="justify-content-between"
              aria-label="Toolbar with Button groups"
            >
              <InputGroup>
                <InputGroup.Text id="btnGroupAddon">Stock:</InputGroup.Text>
                {/* <SearchBar options={symbolList} /> */}
              </InputGroup>
              <ButtonGroup aria-label="First group">
                <InputGroup.Text id="btnGroupAddon">Date:</InputGroup.Text>
                <MyDatePicker onSubmit={setSearchDate} />
              </ButtonGroup>
            </ButtonToolbar>
          </Row>
          <Row>
            <Col>
              <Row>
                <h3>Quote of {name}</h3>
              </Row>
              <Row>
                <QuoteDisplay data={rowDataQ} />
              </Row>
            </Col>
            <Col md lg={8}>
              <Tables
                clickable={false}
                columns={columns}
                rows={rowData}
                style={"table_history"}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md ld={6}>
              <Charts
                date={dates}
                data={open}
                title={"open"}
                color={"#227ab4fa"}
              />
            </Col>
            <Col xs={12} md ld={6}>
              <Charts
                date={dates}
                data={high}
                title={"high"}
                color={"#3db870fa"}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md ld={6}>
              <Charts
                date={dates}
                data={low}
                title={"low"}
                color={"#bd3b3bfa"}
              />
            </Col>
            <Col xs={12} md ld={6}>
              <Charts
                date={dates}
                data={volumes}
                title={"volume"}
                color={"#000000e0"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PriceHistory;
