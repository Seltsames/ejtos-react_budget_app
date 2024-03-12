import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const CurrencySelect = () => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-warning'>
            <span>Currency {currency} </span>
            <select className="custom-select" id="inputGroupSelectCurrency" onChange={handleCurrencyChange} style={{ backgroundColor: "#ffe057", border: "none", padding: "3px 15px 3px 15px", borderRadius: "10px" }}>
                <option value="£" defaultValue >£ Pounds</option>
                <option value="$" name="sales">$ Dollars</option>
                <option value="€" name="finance">€ Euros</option>
                <option value="₹" name="hr">₹ Rupee</option>
            </select>
        </div>
    )

}

export default CurrencySelect;
