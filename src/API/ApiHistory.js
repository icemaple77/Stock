import { useEffect, useState } from "react";

const API_KEY = "0dd0c19136f01040874e4d1027257bfd";

function SearchApiHistory(symbol, dateSearch) {
  const [loading, setLoading] = useState(true);
  const [rowData, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setData(await getDataHistory(symbol, dateSearch));
        setLoading(false);
      } catch (err) {
        setError(err);
        //setLoading(false);
      }
    })();
  }, [symbol, dateSearch]);
  return {
    loading,
    rowData,
    error,
  };
}

async function getDataHistory(symbol, dateSearch) {
  let url = "";

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
      close: history.close,

      volume: history.volume,
    };
  });
  return history;
}

export default SearchApiHistory;
