import React, { useContext } from 'react'
import { globalContext } from '../context/globalContext'

function Display({}) {
    const {expression} = useContext(globalContext);
    let maskedExpression = expression;
    maskedExpression = maskedExpression.replace(/\*/g, '×')
    maskedExpression = maskedExpression.replace(/\//g, '÷')
    maskedExpression = maskedExpression.replace(/\./g, ',')
    return (
        <div className='col-span-4 text-xl text-right my-1'>
            <div >
                {maskedExpression || 0}
            </div>
        </div>
    )
}

export default Display