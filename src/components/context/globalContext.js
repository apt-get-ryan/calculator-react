import { isNumber } from "@/utils/common";
import React, { useCallback, useContext, useState} from "react";

export const globalContext = React.createContext();

export const GlobalProvider = ({children}) => {
    const [expression, setExpression] = useState('');


    const eraseLastKey = useCallback(() => {
        setExpression(prevExp => prevExp.slice(0, -1));
    })
    const clear = useCallback(() => {
        setExpression('');
    })
    const handleCalc = useCallback(() => {
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
    })

    const addToExpression = useCallback((key) => {
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
            setExpression(expression + key);
        else if (key === 'Backspace') eraseLastKey();
        else if (key === 'Clear') clear();
        else if (key === '=') handleCalc();

    }, [expression, setExpression, isNumber, eraseLastKey, clear, handleCalc])
    
    const contextValue = {expression, setExpression, addToExpression}
    return (
        <globalContext.Provider value={contextValue}>
            {children}
        </globalContext.Provider>
    )
}

