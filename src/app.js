import React from 'react'
import Form from './form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const form = event.target
    this.setState({
      [form.name]: form.value
    })
  }
  render () {
    const {name, value} = this.state
    return (
      <Form
        name={name}
        value={value}
        onChange={this.handleChange}/>
    )
  }
}
