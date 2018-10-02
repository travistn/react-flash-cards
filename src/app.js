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
    this.handleSave = this.handleSave.bind(this)
  }
  handleChange(event) {
    const form = event.target
    this.setState({
      [form.name]: form.value
    })
  }
  handleSave(event) {
    event.preventDefault()
    console.log(this.state)
  }
  render () {
    const {value} = this.state
    return (
      <Form
        value={value}
        onChange={this.handleChange}
        onSubmit={this.handleSave}
        />
    )
  }
}
