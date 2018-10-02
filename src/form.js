import React from 'react'

export default function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleQuestion">Question</label>
        <input
          name={props.name}
          type={props.type}
          className="form-control"
          value={props.value}
          onChange={props.onChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleAnswer">Answer</label>
        <input
          name={props.name}
          type={props.type}
          className="form-control"
          props={props.value}
          onChange={props.onChange}/>
      </div>
      <button
        type="save"
        className="btn btn-primary">Save</button>
    </form>
  )
}
