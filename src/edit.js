import React from 'react'

const styles = {
  form: {
    width: '30rem'
  }
}

export default class Edit extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center mt-5">
        <form
          className="card shadow p-2 border-info rounded"
          style={styles.form}>
          <div className="card-body">
            <p className="h3 mb-5 font-weight-light text-center">Edit a Flash Card</p>
            <div className="form-group">
              <label
                htmlFor="question"
                className="font-weight-bold mb-2">Question</label>
              <input
                id="question"
                name="question"
                type="question"
                className="form-control"/>
            </div>
            <div className="form-group">
              <label
                htmlFor="answer"
                className="font-weight-bold mb-2">Answer</label>
              <input
                id="answer"
                name="answer"
                type="answer"
                className="form-control"/>
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
