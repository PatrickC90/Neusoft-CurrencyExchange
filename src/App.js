import React, { useState, useEffect } from "react";
import axios from "axios";

//Import application components
import CurrentDate from './components/currentDate';
import ExchangeCard from './components/ExchangeCard';
import Modal from "./components/Modal";

//Import styles
import './styles/app.scss';

//Add Date to application 
// const date = Date().toLocaleString() + "";

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=55fbac31317a767c710814bf13e42139&';
const SYMBOL_URL = 'http://api.exchangeratesapi.io/v1/symbols?access_key=55fbac31317a767c710814bf13e42139';

// const SYMBOL_URL = 'https://v6.exchangerate-api.com/v6/b46ab8e2da0c23304d976711/codes'
function App() {

  // Add state hooks with useState
  const [show, setShow] = useState(false);
  const [ratesList, setRatesList] = useState([]);
  const [symbols, setSymbols] = useState([]);
  const [symbolName, setSymbolName] = useState([])
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  // console.log(ratesList)
  // console.log(symbols);
  console.log(ratesList);


  //Fetch API for latest rates and store data with useState
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        console.log(firstCurrency);
        setRatesList([data.base, ...Object.entries(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //Fetch API for currency symbols and store data with useState
  useEffect(() => {
    fetch(SYMBOL_URL)
      .then(res => res.json())
      .then((data) => {
        setSymbols([data.base, ...Object.entries(data.symbols)]);
        // setSymbolName([data.base, ...Object.values(data.symbols)])
        // setSymbolName([data.base, ...Object.values([data.symbols])])
      });
  }, []);

  // const getSymbols = async () => {
  //   const res = await axios.get(
  //     `https://api.exchangeratesapi.io/v1/symbols?access_key=55fbac31317a767c710814bf13e42139`
  //   );
  //   const { symbols } = res.data;
  //   console.log(symbols);
  // };


  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Currency Exchange</h1>
        <div className="date-holder">
          <CurrentDate />
        </div>
      </div>


      <div className="card-holder">
        <ExchangeCard
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          ratesList={ratesList} setRatesList={setRatesList} />
        <ExchangeCard />
        <ExchangeCard />
        <ExchangeCard />
        <ExchangeCard />
        <ExchangeCard />
        <ExchangeCard />
      </div>

      <Modal
        key={symbols.key}
        symbols={symbols}
        setSymbols={setSymbols}
        symbolName={symbolName}
        setSymbolName={setSymbolName}
        onClose={() => setShow(false)} show={show} />
      <button onClick={() => setShow(true)} show={show} className="add-currency">Add Currency</button>
    </div>
  );
}

export default App;
