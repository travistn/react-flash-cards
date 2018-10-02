import React from 'react'

export default function Form(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="card form-container">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="exampleQuestion">Question</label>
          <input
            name="question"
            type="question"
            className="form-control"
            value={props.value}
            onChange={props.onChange}/>
       </div>
        <div className="form-group">
          <label htmlFor="exampleAnswer">Answer</label>
          <input
            name="answer"
            type="answer"
            className="form-control"
            value={props.value}
            onChange={props.onChange}/>
        </div>
          <div className="btn-div">
        <button
          type="save"
          className="btn btn-primary save-btn">Save</button>
          </div>
      </div>
    </form>
  )
}
