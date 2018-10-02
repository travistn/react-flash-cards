import React from 'react'

const styles = {
  form: {
    position: 'absolute',
    top: '10rem',
    left: '20rem',
    width: '30rem'
  }
}

export default class Form extends React.Component {
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
    event.target.reset()
  }
  render () {
    const {value} = this.state
    return (
      <form
        onSubmit={this.handleSave}
        className="card shadow p-2 border-info rounded"
        style={styles.form}>
        <div className="card-body">
          <p className="h3 mb-5 font-weight-light text-center">Create a Flash Card</p>
          <div className="form-group">
            <label
              htmlFor="question"
              className="font-weight-bold mb-2">Question</label>
            <input
              id="question"
              name="question"
              type="question"
              className="form-control"
              value={value}
              onChange={this.handleChange}/>
         </div>
          <div className="form-group">
            <label
              htmlFor="answer"
              className="font-weight-bold mb-2">Answer</label>
            <input
              id="answer"
              name="answer"
              type="answer"
              className="form-control"
              value={value}
              onChange={this.handleChange}/>
          </div>
            <div className="mt-5 flex text-center">
          <button
            type="submit"
            className="btn btn-info">Save</button>
            </div>
        </div>
      </form>
    )
  }
}
