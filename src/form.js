import React from 'react'

const styles = {
  form: {
    width: '30rem'
  }
}

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
      topic: ''
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
    const card = Object.assign({}, this.state)
    this.props.onSubmit(card)
    event.preventDefault()
    event.target.reset()
  }
  render() {
    const {value} = this.state
    return (
      <div className="d-flex justify-content-center mt-5">
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
            <div className="form-group">
              <label
                htmlFor="topic"
                className="font-weight-bold mb-2">Topic</label>
              <input
                id="topic"
                name="topic"
                type="topic"
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
      </div>
    )
  }
}
