"use client";
import { isNumber } from '@/utils/common';
import React, { useContext, useEffect} from 'react'
import { globalContext } from '../context/globalContext';

const Wrapper = ({children}) => {

  return (
    <div className="bg-slate-800 w-full max-w-56 p-1 rounded text-slate-100 grid grid-cols-4 gap-1">
      {children}
    </div>
  )
}

export default Wrapper