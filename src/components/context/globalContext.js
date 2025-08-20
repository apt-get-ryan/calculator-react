import { isNumber } from "@/utils/common";
import React, {useContext, useState} from "react";

export const globalContext = React.createContext();

export const GlobalProvider = ({children}) => {
    const [expression, setExpression] = useState('');


    const eraseLastKey = () => {
        setExpression(prevExp => prevExp.slice(0, -1));
    }
    const clear = () => {
        setExpression('');
    }
    const handleCalc = () => {
        try {
            if(expression == '')
                return;
            let calcResult = eval(expression);
            calcResult = String(calcResult);
            if(calcResult == '0')
                calcResult = '';
            setExpression(calcResult);
        } catch(err) {
            console.log(err);
        }
    }

    const addToExpression = (key) => {
        if(expression == 'NaN' || expression === 'Infinity')
        {
            setExpression('');
            return;
        }
        if(['+', '-', '/', '*', '.'].includes(key) && expression === '')
        {
            setExpression('0' + key);
            return;
        }

        if(isNumber(key) || ['+', '-', '/', '*', '.'].includes(key))
            setExpression(prev => prev + key);
        else if (key === 'Backspace') eraseLastKey();
        else if (key === 'Clear') clear();
        else if (key === '=') handleCalc();

    }
    
    const contextValue = {expression, setExpression, addToExpression}
    return (
        <globalContext.Provider value={contextValue}>
            {children}
        </globalContext.Provider>
    )
}

