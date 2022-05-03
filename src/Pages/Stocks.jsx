import SearchApiStocks from "../API/ApiStocks";
import Tables from "../Components/Tables";
import SearchBar from "../Components/SearchBar";
import SelectBar from "../Components/SelectBar";
import { useState } from "react";
import {
  Container,
  Row,
  Badge,
  ButtonToolbar,
  InputGroup,
  ButtonGroup,
} from "react-bootstrap";
import "../Styles/App.css";

function filterStocks(data, symbol, industry) {
  const finalData = data.filter((profile) => {
    if (symbol === "" && industry === "") {
      return profile;
    } else if (
      profile.symbol.toLowerCase().includes(symbol.toLowerCase()) &&
      profile.industry.toLowerCase().includes(industry.toLowerCase())
    ) {
      return profile;
    }
  });
  return finalData;
}

function getStocksIndustry(data) {
  let options = [];
  data.map((stock) => options.push(stock.industry));
  return [...new Set(options)].sort();
}

function getStocksSymbol(data) {
  let options = [{ value: "", label: "All Symbol" }];
  data.map((stocks) => {
    options.push({ value: stocks.symbol, label: stocks.symbol });
  });
  return options;
}

function Stocks() {
  const [searchSymbol, setSearchSymbol] = useState("");
  const [searchIndustry, setSearchIndustry] = useState("");
  const { loading, rowData, error } = SearchApiStocks();
  let uniqueOptions = getStocksIndustry(rowData);
  let stocksList = filterStocks(rowData, searchSymbol, searchIndustry);
  let symbolList = getStocksSymbol(rowData);

  const columns = [
    {
      headername: "Symbol",
      field: "symbol",
      resizable: true,
      flex: 1,
      sortable: true,
      filter: true,
    },
    {
      headername: "Name",
      field: "name",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
    {
      headername: "Industry",
      field: "industry",
      resizable: true,
      flex: 2,
      sortable: true,
      filter: true,
    },
  ];

  if (loading || rowData === undefined) {
    return <h1>Loading...</h1>;
  }
  if (error != null) {
    return <h1>error...</h1>;
  } else {
    return (
      <div>
        <Container>
          <Row>
            <h1 className="title">Stocks</h1>
            <p className="context">
              <Badge className="left" bg="dark">
                {rowData.length}
              </Badge>
              Stocks published
            </p>
          </Row>

          <Row>
            <ButtonToolbar
              className="justify-content-between"
              aria-label="Toolbar with Button groups"
            >
              <InputGroup>
                <InputGroup.Text id="btnGroupAddon">Stock:</InputGroup.Text>
                <SearchBar options={symbolList} onSubmit={setSearchSymbol} />
              </InputGroup>
              <ButtonGroup aria-label="First group">
                <InputGroup.Text id="btnGroupAddon">Industry:</InputGroup.Text>
                <SelectBar
                  options={uniqueOptions}
                  onSubmit={setSearchIndustry}
                />
              </ButtonGroup>
            </ButtonToolbar>
          </Row>
          <Row>
            <div className="h10 ">
              Please click on the symbol or name of stocks for a detailed quote
              and historical price
            </div>
          </Row>

          <Row>
            <Tables
              clickable={true}
              columns={columns}
              rows={stocksList}
              style={"table_stock"}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
export default Stocks;
