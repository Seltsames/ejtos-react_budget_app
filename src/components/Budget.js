import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 21000) {
            alert("Hey! stop, the budget cant exceed £20.000! there is not that much money");
            setNewBudget(budget);
            return;
        }
        if (event.target.value < totalExpenses) {
            alert("Hey! stop, the budget cant be less than  £" + totalExpenses + "! we need something to work!");

            return;
        }

        setNewBudget(event.target.value);
    }
    return (
            <div className='alert alert-secondary'>
                <span>Budget: {currency} </span>
                <input className="form form-input w-50 p-0" type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </div>
    );
};
export default Budget;
