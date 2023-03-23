import BlockCurrency from '../blockCurrency/BlockCurrency';
import './BlockCurrenciesItems.css';

const BlockCurrenciesItems = ({
    currencyFrom,
    setCurrencyFrom,
    chooseCurrentValue,
    chooseOperationValue,
    numOne,
    setValue,
    currencyTo,
    setCurrencyTo,
    numTwo
  }) =>{

    return(
        <div className='blockCurrencies'>
            <BlockCurrency
            currency = {currencyFrom}
            chooseCurrent = {(event) => chooseCurrentValue(event, setCurrencyFrom)}
            choseOperation = {(event) => chooseOperationValue(event, setValue, true)}
            count = {numOne}
            text = {'From:'}/>
            <BlockCurrency
            currency = {currencyTo} 
            chooseCurrent = {(event) => chooseCurrentValue(event, setCurrencyTo)}
            choseOperation = {(event) => chooseOperationValue(event, setValue, false)}
            count = {numTwo}
            text = {'To:'}/>
      </div>
    );
}

export default BlockCurrenciesItems;