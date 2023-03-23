import Text from "../text/Text";
import BlockCurrenciesItems from "../blockCurrenciesItems/BlockCurrenciesItems";
import BlockShowResult from "../blockShowResult/BlockShowResult";
import './Header.css';

const Header = ({ currencyFrom,
    setCurrencyFrom,
    chooseCurrentValue,
    chooseOperationValue,
    numOne,
    setValue,
    currencyTo,
    setCurrencyTo,
    numTwo,}) =>{
    return(
      <header className='header'>
        <Text nameClass = {'title'} text = {'Currency Exchange'} />
        <BlockCurrenciesItems
        currencyFrom={currencyFrom}
        setCurrencyFrom={setCurrencyFrom}
        chooseCurrentValue={chooseCurrentValue}
        chooseOperationValue={chooseOperationValue}
        numOne={numOne}
        setValue={setValue}
        currencyTo={currencyTo}
        setCurrencyTo={setCurrencyTo}
        numTwo={numTwo}/>
        <BlockShowResult numOne={numOne} numTwo={numTwo} currencyFrom={currencyFrom} currencyTo={currencyTo}/>
      </header>
    );
}

export default Header;