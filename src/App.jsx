import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import Products from "./components/Products"
// import Counter from "./components/Counter"
import './App.css'
import { ThemeContext } from "./contexts/theme"
import { CounterContext } from "./contexts/count"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

// import Body from "./components/Body"
// import Counter from "./components/Counter"
// import { CounterContext } from "./contexts/count"
// import Calculator from "./components/Calculator"
// function App() {
//   const names="Roja"
//   const age=22
//   const ht=169
//   const dept="Msc"
  
//   return (
//     <>
    
//      <div>App component</div>
//    {/* <Body names={names} age={age} ht={ht} dept={dept}/>
//    <Counter/> */}
//     <Calculator/> 
//     </>
//   )
// }
// // const App=()=>{
// //   return (
// //   <div>App component</div>
// //   )
// //   }
  
function App(){
const[theme,setTheme]=useState("Light")
const [count, setCount] = useState(0)
// const [count,setCount]=useState(0)
  //No dependency array
  useEffect(()=>{
    document.body.className=theme
  },[theme])
  
  function toggleTheme() {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')  
    setCount(count+1)
  }

  // function increment(){
  //   setCount(count+1)
  // }
  return (
    <>
    <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>
      <CounterContext.Provider value={{count:count,setCount:setCount}}>
        <Header />
        {/* <Counter/> */}
          {/* <Products /> */}
          <Outlet/>
          <ToastContainer/>
      </CounterContext.Provider>
    </ThemeContext.Provider >
    
    
    </>
  )
}

  // function toggleTheme(){
  //   setTheme(theme==='Light'?'Dark':'Light')
  //   // setCount(count+1)
  // }
  // function increment(){
  //   setCount(count+1)
    // setCount((prev)=>prev+1)//for accessing previous value
    // count=count+1
    // console.log(count)
// }
//   return(
//    <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>
//     <div></div>
//     <CounterContext.Provider value={{count:count,increment:increment}}>
//     <Header/>
//     <Counter/>
// <Products/>
      
//       </CounterContext.Provider>
//     </ThemeContext.Provider>

  
//   )
// }
export default App
