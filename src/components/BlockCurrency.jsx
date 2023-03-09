import React from 'react';
import BlockValueCurrency from './BlockValueCurrency';
import './BlockCurrency.css';

const BlockCurrency = ({currency, chooseCurrent, choseOperation, count, text}) =>{

    return(
        <div className='blockCurrency'>
            <p className='textDirection'>{text}</p>
            <BlockValueCurrency 
            currency = {currency}
            chooseCurrent = {chooseCurrent}
            choseOperation = {choseOperation}
            count = {count}/>
        </div>
    );
}

export default BlockCurrency;