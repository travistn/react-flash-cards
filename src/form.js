import React from 'react'

export default function Form(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="card shadow w-50 p-2 border-info form-container rounded">
      <div className="card-body">
        <p className="h3 mb-5 font-weight-light text-center">Create a Flash Card</p>
        <div className="form-group">
          <label
            htmlFor="exampleQuestion"
            className="font-weight-bold mb-2">Question</label>
          <input
            name="question"
            type="question"
            className="form-control"
            value={props.value}
            onChange={props.onChange}/>
       </div>
        <div className="form-group">
          <label
            htmlFor="exampleAnswer"
            className="font-weight-bold mb-2">Answer</label>
          <input
            name="answer"
            type="answer"
            className="form-control"
            value={props.value}
            onChange={props.onChange}/>
        </div>
          <div className="mt-5 flex text-center">
        <button
          type="save"
          className="btn btn-info">Save</button>
          </div>
      </div>
    </form>
  )
}
