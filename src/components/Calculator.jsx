import { useState } from "react"
import '../App.css'
function Calculator(){
    const[result,calcOp]=useState(0)
    const[num1,setNum1]=useState(0)
    const[num2,setNum2]=useState(0)
    function handleNum1(e){
        setNum1(e.target.value)
    }
    function handleNum2(e){
        setNum2(e.target.value)
    }
    function addNum(){
        calcOp(parseInt(num1)+parseInt(num2))  
    }
    function subNum() {
        calcOp(num1-num2)
    }
    function divNum() {
        calcOp(num1/num2)
    }
    function mulNum() {
        calcOp(num1*num2)
    }
    return(
        <>
        <div className="calc">
            <h1>Calculator</h1>
        Number 1: <input type="text" value={num1} onChange={handleNum1}/>&nbsp;<br />
        Number 2: <input type="text" value={num2} onChange={handleNum2}/><br />
        <button onClick={addNum}>+</button>&nbsp;
        <button onClick={subNum}>-</button>&nbsp;
        <button onClick={divNum}>/</button>&nbsp;
        <button onClick={mulNum}>*</button>
        <h1>The result is {result}</h1>
        </div>
        </>
    )
}
export default Calculator