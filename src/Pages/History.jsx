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
function filterHistory(data, dateSearch) {
  let finalData = [];
  if (dateSearch > new Date()) {
    return (finalData = []);
  } else if (
    dateSearch === "" ||
    dateSearch.toISOString().slice(0, 10) ===
      new Date().toISOString().slice(0, 10)
  ) {
    return (finalData = data);
  } else {
    finalData = data.filter((history) => {
      return history.date >= dateSearch.toISOString().slice(0, 10);
    });
    return finalData;
  }
}

function PriceHistory() {
  const location = useLocation();
  const symbol = location.state.name;
  const [searchDate, setSearchDate] = useState("");

  const { loading, rowData, error } = SearchApiHistory(symbol);
  const { loadingQ, rowDataQ, errorQ } = SearchApiQuote(symbol);
  let historyList = filterHistory(rowData, searchDate);
  const { dates, open, high, low, close, volumes } =
    getHistoryInfo(historyList);

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
            <p className="title">History of {rowDataQ[0].name}</p>
          </Row>
          <Row>
            <MyDatePicker onSubmit={setSearchDate} />
          </Row>
          <Row>
            <Col>
              <Row>
                <div className="table">
                  <h3>Quote of {rowDataQ[0].name}</h3>
                </div>
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
            <div className="table">
              <Tables
                clickable={false}
                columns={columns}
                rows={historyList}
                style={`${"table_history"}`}
              />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PriceHistory;
