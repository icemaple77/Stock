import SearchApiHistory from "../API/ApiHistory";
import SearchApiQuote from "../API/ApiQuote";
import Tables from "../Components/Tables";
import Charts from "../Components/Charts";
import MyDatePicker from "../Components/MyDatePicker";
import QuoteDisplay from "../Components/QuoteDisplay";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
// function getQuoteInfo(data) {
//   const dates = data.map((history) => history.date);
//   const open = data.map((history) => history.open);
//   const high = data.map((history) => history.high);
//   const low = data.map((history) => history.low);

//   const volumes = data.map((history) => history.volume);

//   return {
//     dates,
//     open,
//     high,
//     low,
//     volumes,
//   };
// }
function getHistoryInfo(data) {
  const dates = data.map((history) => history.date);
  const open = data.map((history) => history.open);
  const high = data.map((history) => history.high);
  const low = data.map((history) => history.low);
  const close = data.map((history) => history.open);
  const volumes = data.map((history) => history.volume);

  return {
    dates,
    open,
    high,
    low,
    close,
    volumes,
  };
}

function PriceHistory() {
  const [searchDate, setSearchDate] = useState("");
  const location = useLocation();
  const symbol = location.state.name;

  console.log("120" + symbol);
  const { loading, rowData, name, error } = SearchApiHistory(
    symbol,
    searchDate
  );
  const { loadingQ, rowDataQ, errorQ } = SearchApiQuote(symbol);
  // const { dates, open, high, low, volumes } = getQuoteInfo(rowDataQ);
  const { dates, open, high, low, close, volumes } = getHistoryInfo(rowData);
  // console.log("130" + rowData[1].date);
  // console.log("140" + dates);
  console.log(rowData);
  // const newDate = datesH.reverse();
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
      headername: "Close",
      field: "close",
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
            <p className="title">History of {symbol}</p>
          </Row>
          <Row>
            <MyDatePicker onSubmit={setSearchDate} />
          </Row>
          <Row>
            <Col>
              <Row>
                <h3>Quote of {symbol}</h3>
              </Row>
              <Row>
                <QuoteDisplay data={rowDataQ} />
              </Row>
            </Col>
            <Col md lg={8}>
              <Charts
                date={dates.reverse()}
                open={open}
                low={low}
                high={high}
                close={close}
                volumes={volumes}
              />
            </Col>
          </Row>
          <Row>
            <Tables
              clickable={false}
              columns={columns}
              rows={rowData}
              style={"table_history"}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default PriceHistory;
