import { mergeClassNames } from '@/utils/common'
import React, { useContext, useEffect, useRef } from 'react'
import { globalContext } from '../context/globalContext';

function Button({children, className, style, keyValue}) {
    const { addToExpression } = useContext(globalContext);
    const btnRef = useRef(null);

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
    };

    useEffect(() => {
        /**
         * @param {KeyboardEvent} e
         */

        const handleKeyUp = (e) => {
            if(!btnRef) return;
            if(e.key == keyValue 
                || (e.key.toLowerCase() == "c" && keyValue == "Clear")
                || (e.key == "Enter" && keyValue == "=")
                || (e.key == "," && keyValue == ".")
            ) {
                btnRef.current.click();
            }
        }
        window.addEventListener("keyup", handleKeyUp)
        return () => window.removeEventListener("keyup", handleKeyUp);
    }, [])
    return (
        <button ref={btnRef} onClick={() => { addToExpression(keyValue) }} className={mergeClassNames("text-xl px-4 py-3 flex items-center justify-center", bgStyles, className)}>
            {children}
        </button>
    )
}

export default Button