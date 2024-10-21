"use client";
import Button from "@/components/calculator/Button";
import Display from "@/components/calculator/Display";
import { GlobalProvider } from "@/components/context/globalContext";
import { IoBackspaceOutline } from "react-icons/io5";

const Calculator = () => {
    return (
        <GlobalProvider>
            <div className="bg-slate-800 w-full max-w-56 p-1 rounded text-slate-100 grid grid-cols-4 gap-1">
                <Display/>

                <Button keyValue={'Clear'}style="darker">C</Button>
                <Button keyValue={'Backspace'} className='col-span-2' style="darker">{<IoBackspaceOutline />}</Button>
                <Button keyValue={'/'} style="amber">{'÷'}</Button>

                <Button keyValue={7}>7</Button>
                <Button keyValue={8}>8</Button>
                <Button keyValue={9}>9</Button>
                <Button keyValue={'*'} style="amber">{'×'}</Button>

                <Button keyValue={4}>4</Button>
                <Button keyValue={5}>5</Button>
                <Button keyValue={6}>6</Button>
                <Button keyValue={'-'} style="amber">-</Button>

                <Button keyValue={1} className="rounded-bl-sm">1</Button>
                <Button keyValue={2}>2</Button>
                <Button keyValue={3}>3</Button>
                <Button keyValue={'+'} style="amber" className=" rounded-br-sm">+</Button>
            
                <Button keyValue={0} className="col-span-2">0</Button>
                <Button keyValue='.'>,</Button>
                <Button keyValue={'='} style="amber">=</Button>

            </div>
        </GlobalProvider>
    );
}
export default function App() {
    return (
        <Calculator/>
    )    
}
  