import React from 'react'

export default class Cards extends React.Component {
  render() {
    if (this.props.card === 0) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="text-center mt-3">
            <div className="h2">You have no flash cards.</div>
            <button
              type="button"
              className="btn btn-info mt-5"
              onClick={this.props.newCardView}>Make one</button>
          </div>
        </div>
      )
    }
    if (this.props.card > 0) {
      return (
        <div className="container">
          <div className="row text-center mt-3">
            {
              this.props.cards.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="card m-2">
                    <div className="card-body">
                      <p className="card-text">{card.question}</p>
                      <p className="card-text">{card.answer}</p>
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
