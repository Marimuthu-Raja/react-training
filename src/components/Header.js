// import React, { Component } from "react"

// export default class Header extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello {this.props.name}</h1>
//       </div>
//     )
//   }
// }
import React, { useState, useEffect } from "react"

const arr = [{ no: 1 }, { no: 2 }]
// function Temp(a=10,b=10){
//     c=a+b
// }

// const fnName = () =>
arr.map((val) => console.log(val))

const filtermyArr = () => {
  const filterd = arr.filter((val) => val.no !== 3)
  console.log(filterd)
}

const FindinArr = () => {
  const found = arr.find((val) => "10" == 10)
  console.log(found)
}

function Header() {
  return (
    <div>
      {/* {arr.map((val) => (
        <button>{val}</button>
      ))} */}
      <button onClick={FindinArr}>Click me</button>
    </div>
  )
}

export default Header
