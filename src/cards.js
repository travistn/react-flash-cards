import React from 'react'

const styles = {
  button: {
    color: 'white'
  },
  edit: {
    cursor: 'pointer'
  }
}

export default class Cards extends React.Component {
  render() {
    if (this.props.cards.length === 0) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="text-center mt-3">
            <div className="h2">You have no flash cards.</div>
            <button
              type="button"
              className="btn btn-info mt-5">
              <a
                href="#new-card"
                style={styles.button}>Make One</a>
            </button>
          </div>
        </div>
      )
    }
    if (this.props.cards.length > 0) {
      return (
        <div className="container">
          <div className="row text-center mt-3">
            {
              this.props.cards.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="card shadow m-2 mt-3 w-25 border-light">
                    <div className="card-body">
                      <p className="card-text">{card.question}</p>
                      <p className="card-text">{card.answer}</p>
                      <p>
                        <a href="#edit">
                          <i
                            className="fas fa-pencil-alt float-right"
                            style={styles.edit}></i>
                        </a>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }
}
