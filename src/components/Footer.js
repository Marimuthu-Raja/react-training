import React, { Component } from "react"
import Header from "./Header"
export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Asmath",
      age: 20,
      qualificstion: {
        UG: "B.Sc",
        PG: "M.Sc",
      },
    }
  }

  changeName = () => {
    // this.state.name = "Raja"
    this.setState({ name: "Raja" })
  }

  changeAge = () => {
    this.setState({ age: this.state.age + 1 })
  }
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 35, color: "red" }}>
          My name is {this.state.name}
        </h1>
        <h1 className='AgeStyle'>My Age is {this.state.age}</h1>
        <h1>My PG is {this.state.qualificstion.PG}</h1>
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={this.changeAge}>Increase Age</button>
        <Header name={this.state.name} />
      </div>
    )
  }
}
