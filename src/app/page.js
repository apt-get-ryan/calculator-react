import Button from "@/components/calculator/Button";
import Display from "@/components/calculator/Display";

const Calculator = () => {
    return (
        <div className="bg-slate-800 w-full max-w-56 p-1 rounded text-slate-100 grid grid-cols-4 gap-1">
            <Display/>

            <Button style="darker">C</Button>
            <Button style="darker">{'('}</Button>
            <Button style="darker">{')'}</Button>
            <Button style="amber">/</Button>

            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button style="amber">*</Button>

            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button style="amber">-</Button>

            <Button className="rounded-bl-sm">1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button style="amber" className=" rounded-br-sm">=</Button>
        </div>
    );
}
export default function App() {
    return (
        <Calculator/>
    )    
}
  