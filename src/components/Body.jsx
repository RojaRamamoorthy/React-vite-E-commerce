import React, { useState } from "react"


function Body(props){
    console.log(props)
const[dept,setDept]=useState('')
function handleDeptChange(e){
setDept(e.target.value)
}
    return(
        <>
        <div>Body component</div>
        <h1>User details</h1>
        <p>Name : {props.names}</p>
   <p>Age  : {props.age}</p>
   <p>Height : {props.ht}</p>
   {/* <p>Department : {props.dept} </p> */}
   Department: <input type="text" value={dept} onChange={handleDeptChange}/>
   <p>{props.names} is studying in {dept}</p>
   
        </>
    )
}
export default Body