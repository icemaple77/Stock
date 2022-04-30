import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const API_KEY = "1031bcaf47ced35f5adf93ebd56dee09";

function SearchApiHistory(name, search) {
  const [loading, setLoading] = useState(true);
  const [rowData, setData] = useState([]);
  const [error, setError] = useState(null);
  //const location = useLocation();
  //const name = location.state.name;

  useEffect(() => {
    (async () => {
      try {
        setData(await getDataHistory(name, search));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [search]);
  return {
    loading,
    rowData,
    name,
    error,
  };
}

async function getDataHistory(symbol, dateSearch) {
  let url = "";
  console.log("110" + symbol);
  // if (symbol === "") {
  //   symbol = "AMAT";
  // }
  if (
    dateSearch === "" ||
    dateSearch.toISOString().slice(0, 10) ===
      new Date().toISOString().slice(0, 10)
  ) {
    url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?timeseries=100&apikey=${API_KEY}`;
  } else {
    url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${dateSearch
      .toISOString()
      .slice(0, 10)}&to=${new Date()
      .toISOString()
      .slice(0, 10)}&apikey=${API_KEY}`;
  }
  let res = await fetch(url);
  let data = await res.json();
  let history = data.historical.map((history) => {
    return {
      date: history.date,
      open: history.open,
      low: history.low,
      high: history.high,
      volume: history.volume,
    };
  });
  return history;
}

export default SearchApiHistory;
