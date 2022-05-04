import SearchApiHistory from "../API/ApiHistory";
import SearchApiQuote from "../API/ApiQuote";
import Tables from "../Components/Tables";
import Charts from "../Components/Charts";
import MyDatePicker from "../Components/MyDatePicker";
import QuoteDisplay from "../Components/QuoteDisplay";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

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

  const { loading, rowData, error } = SearchApiHistory(symbol, searchDate);
  const { loadingQ, rowDataQ, errorQ } = SearchApiQuote(symbol);

  const { dates, open, high, low, close, volumes } = getHistoryInfo(rowData);

  const columns = [
    {
      headerName: "Date",
      field: "date",
      resizable: true,
      flex: 1,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Open",
      field: "open",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headerName: "High",
      field: "high",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Low",
      field: "low",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Close",
      field: "close",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Volume",
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
                open={open.reverse()}
                low={low.reverse()}
                high={high.reverse()}
                close={close.reverse()}
                volumes={volumes.reverse()}
              />
            </Col>
          </Row>
          <Row>
            <Tables
              clickable={false}
              columns={columns}
              rows={rowData}
              state={"table_history "}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default PriceHistory;
