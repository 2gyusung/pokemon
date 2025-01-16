import "./App.scss";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import data from './json/data.json';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  console.log(data);
  
  // const [data, setData] = useState([]);

  // // useEffect(() => {
  // //   const fetchData = async () => {
  // //     const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  // //     return res.data;
  // //   };
    
  //   fetchData().then((res) => setData(res));
  // }, []);
  // console.log(data);
  
  return (
    <div className="App">

      <Header />
      <Contents data={data} />
      <Footer />
    </div>
  );
}

export default App;
