import Text from "../text/Text";
import './BlockShowResult.css';

const BlockShowResult = ({numOne, currencyFrom, numTwo, currencyTo}) =>{
    return(
        <div className='blockResult'>
            <Text nameClass="textResult" text={`${numOne} ${currencyFrom} = `}/>
            <span className="currencyTo textResult">{numTwo}</span>
            <Text nameClass="textResult" text={` ${currencyTo}`} />
        </div>
    );
}

export default BlockShowResult;