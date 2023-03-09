import { useEffect, useState } from 'react';
import './App.css';
import BlockCurrency from './components/BlockCurrency';

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("UAH");
  const [valuePrice, setValuePrice] = useState(null);
  const [changeCount, setChangeCount] = useState(true);
  const [value , setValue] = useState(1);
  let numOne , numTwo;

  useEffect(()=>{
    fetch(`https://v6.exchangerate-api.com/v6/c2f390f68c2f25986d648f7a/latest/${currencyFrom}`)
    .then(response => response.json())
    .then(dataCurrent => {
        setValuePrice(dataCurrent.conversion_rates[currencyTo]);
  })
}, [currencyTo, currencyFrom]);

  if(changeCount){
    numOne = value;
    numTwo = (value * valuePrice).toFixed(2);
  }
  else{
    numTwo = value;
    numOne = (value / valuePrice).toFixed(2);
  }

  const chooseCurrentFrom = (event)=>{
    setCurrencyFrom(event.target.value);
}

  const chooseCurrentTo = (event)=>{
    setCurrencyTo(event.target.value);
}

  const chooseOperationFrom = (event)=>{
    event.target.value>= 1 ?  setValue(event.target.value): setValue("");
    setChangeCount(true);
}

  const chooseOperationTo = (event)=>{
    event.target.value>= 1 ?  setValue(event.target.value): setValue("");
    setChangeCount(false);
}

  return (
    <div className='currencyExchange'>
      <header className='header'>
      <h1>Currency Exchange</h1>
      <div className='blockCurrencies'>
        <BlockCurrency
        currency = {currencyFrom}
        chooseCurrent = {chooseCurrentFrom}
        choseOperation = {chooseOperationFrom}
        count = {numOne}
        text = {'From:'}/>
        <BlockCurrency
        currency = {currencyTo} 
        chooseCurrent = {chooseCurrentTo}
        choseOperation = {chooseOperationTo}
        count = {numTwo}
        text = {'To:'}/>
      </div>
      <p className='textResult'>{numOne} {currencyFrom} = <span className='currencyTo'>{numTwo}</span> {currencyTo}</p>
      </header>
    </div>
  );
}

export default App;
