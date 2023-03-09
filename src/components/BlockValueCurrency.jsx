import React from 'react';
import './BlockValueCurrency.css';

const BlockValueCurrency = ({currency, chooseCurrent, choseOperation, count}) =>{

    return(
        <div className='form'>
            <input type={'number'} onChange={choseOperation} value={count} min={1} className={'formValue'}/>
            <select value = {currency} onChange={chooseCurrent} className={'formValue'}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
            </select>
        </div>
    );
}

export default BlockValueCurrency;