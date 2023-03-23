import React from 'react';
import BlockValueCurrency from '../blockValueCurrency/BlockValueCurrency';
import './BlockCurrency.css';
import Text from '../text/Text';

const BlockCurrency = ({currency, chooseCurrent, choseOperation, count, text}) =>{

    return(
        <div>
            <Text nameClass = {'textDirection'} text = {text}/>
            <BlockValueCurrency 
            currency = {currency}
            chooseCurrent = {chooseCurrent}
            choseOperation = {choseOperation}
            count = {count}/>
        </div>
    );
}

export default BlockCurrency;