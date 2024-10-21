import { mergeClassNames } from '@/utils/common'
import React, { useContext } from 'react'
import { globalContext } from '../context/globalContext';

function Button({children, className, style, onClick, keyValue}) {
    const { addToExpression } = useContext(globalContext);
    let bgStyles;
    switch(style) {
        case 'amber':
            bgStyles = "bg-amber-500 active:bg-amber-600";
            break;
        case 'darker':
            bgStyles = "bg-[#272e39] active:bg-gray-800";
            break;
        default:
            bgStyles = "bg-gray-600 active:bg-gray-700";
            break;
    }
    return (
        <button onClick={() => { addToExpression(keyValue) }} className={mergeClassNames("text-xl px-4 py-3 flex items-center justify-center", bgStyles, className)}>
            {children}
        </button>
    )
}

export default Button