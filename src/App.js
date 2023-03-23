import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import getCurrency from './service/currencyService';
import Header from './components/header/Header';

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("UAH");
  const [valuePrice, setValuePrice] = useState(null);
  const [changeCount, setChangeCount] = useState(true);
  const [value , setValue] = useState(1);

  useEffect(()=>{
    getCurrency(currencyFrom, currencyTo)
    .then((valuePrice) => setValuePrice(valuePrice))
    .catch((error) => console.log(error.message));
}, [currencyTo, currencyFrom]);

const numOne = useMemo(() => changeCount ? value : (value / valuePrice).toFixed(2), [changeCount, value, valuePrice]);

const numTwo = useMemo(() => changeCount ? (value * valuePrice).toFixed(2) : value, [changeCount, value, valuePrice]);

const chooseCurrentValue = useCallback((event, setter) =>{
  setter(event.target.value)
}, []);

const chooseOperationValue = useCallback((event, setter, valueSetter) =>{
  event.target.value>= 1 ?  setter(event.target.value): setter("");
  setChangeCount(valueSetter);
}, []);

  return (
    <div className='currencyExchange'>
      <Header
      currencyFrom={currencyFrom}
      setCurrencyFrom={setCurrencyFrom}
      chooseCurrentValue={chooseCurrentValue}
      chooseOperationValue={chooseOperationValue}
      numOne={numOne}
      setValue={setValue}
      currencyTo={currencyTo}
      setCurrencyTo={setCurrencyTo}
      numTwo={numTwo}
      />
    </div>
  );
}

export default App;
