import React, { Component } from "react"
import Header from "./Header"
import { Button, Form } from "react-bootstrap"
import axios from "axios"
export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.changeAge = this.changeAge.bind(this)
    this.state = {
      name: "Asmath",
      age: 20,
      qualificstion: {
        UG: "B.Sc",
        PG: "M.Sc",
      },
      user: {},
      post: [],
    }
  }

  componentDidMount() {
    // console.log("did mount")
    // axios.get("https://jsonplaceholder.typicode.com/todos/2").then((res) => {
    //   const user = res.data
    //   this.setState({ user })
    // })
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const { data } = res
      console.log(data)
      this.setState({ post: data })
    })
  }

  componentDidUpdate() {
    console.log("did update")
  }

  componentWillUnmount() {}

  changeName = () => {
    // this.state.name = "Raja"
    this.setState({ name: "Raja" })
  }

  changeAge() {
    this.setState({ age: this.state.age + 1 })
  }

  getValue = (e) => {
    console.log(e.target.value)
    this.setState({ name: e.target.value })
  }
  // changeAge = () => {
  //   this.setState({ age: this.state.age + 1 })
  // }
  render() {
    // console.log("render")
    const { name, user } = this.state
    const { UG } = this.state.qualificstion
    return (
      <div>
        {/* <h1 style={{ fontSize: 35, color: "red" }}>My name is {user.title}</h1>
        <h1 className='AgeStyle'>My Age is {this.state.age}</h1>
        <h1>My PG is {UG}</h1> */}
        {/* <input type='text' onChange={this.getValue} />
         */}

        {/* <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Button variant='success' onClick={this.changeName}>
          Success
        </Button> */}
        {/* <button >Change Name</button> */}
        {/* <button onClick={this.changeAge}>Increase Age</button>
        <Header name={this.state.name} /> */}
        {this.state.post.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
      </div>
    )
  }
}
