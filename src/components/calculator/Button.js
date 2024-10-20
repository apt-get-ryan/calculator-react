import mergeClassNames from '@/utils/common'
import React from 'react'

function Button({children, className, style}) {
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
        <button className={mergeClassNames("text-xl px-4 py-3", bgStyles, className)}>
            {children}
        </button>
    )
}

export default Button