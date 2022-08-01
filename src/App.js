import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/belarus")
      .then((res) => setData(res.data));
  }, []);
  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
