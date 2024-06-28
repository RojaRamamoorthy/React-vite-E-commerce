import React, { useState } from "react"
// import { CounterContext } from "../contexts/count"
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement, incrementByValue } from "../reducers/counterSlice"
function Counter(){
    const count = useSelector((state) => state.counter.count)
    const dispatch=useDispatch()
    const [val,setVal]=useState()
function handleValChange(e){
setVal(e.target.value)
}
function handleIncrement(){
    if(val){
dispatch(incrementByValue(parseInt(val)))
    }
    else{
        dispatch(increment())
    }
}
    return (
        <>
            {/* <div><h1>Counter component</h1></div> */}
            <p>Counter : {count}</p>
            <input type="number" value={val} onChange={handleValChange} />
            <button onClick={handleIncrement}>Increment</button>&nbsp;
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={handleIncrement}>Inc by value</button>
            {/* <button onClick={decrement}>Decrement</button> */}
        </>
    )
}
    // const {increment}=useContext(CounterContext)
    // const count = useSelector((state)=>state.counter.count)
    // return(
    //     <>
    //     <div><h1>Counter component</h1></div>
    //     <p>Count : {count}</p>
    //     <button onClick={dispatch(increment)}>Increment</button>&nbsp;
    //     </>
    //     )}
//     // const [count,setCount]=useState(0)
//    const{count,setCount}=useContext(CounterContext)
//     // const {count,setCount} =useContext(CounterContext)
//     // let count=0
//     function increment(){
//         console.log("incremented")
//         setCount(count+1)
//         // setCount((prev)=>prev+1)//for accessing previous value
//         // count=count+1
//         // console.log(count)
// //     }
// //     function decrement(){
// // if(count<=0)
// // console.log("cant be decremented")
// // if(count>0)
// //     console.log("decremented") 
// //  return setCount(count-1)
       
// //     }

   
// {/* //         <button onClick={decrement}>Decrement</button> */}
//         </>
//   )
//  }
export default Counter