import React from 'react'

export default function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleQuestion">Question</label>
        <input
          name="question"
          type="question"
          className="form-control"
          onChange={props.onChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleAnswer">Answer</label>
        <input
          name="answer"
          type="answer"
          className="form-control"
          onChange={props.onChange}/>
      </div>
      <button
        type="save"
        className="btn btn-primary">Save</button>
    </form>
  )
}
