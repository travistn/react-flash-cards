import React from 'react'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: 0,
      answerIsShown: false
    }
  }
  handleToggle() {
    this.setState({
      answerIsShown: !this.state.answerIsShown
    })
  }
  render() {
    const {cards} = this.props
    const currentCard = this.state.currentCard
    return (
      <div className="d-flex justify-content-center mt-5">
        <span>
          <i className="fas fa-angle-double-left arrow mr-3"></i>
        </span>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{cards[currentCard].question}</h5>
            <p className="card-text"></p>
          </div>
        </div>
        <span>
          <i className="fas fa-angle-double-right arrow ml-3"></i>
        </span>
      </div>
    )
  }
}
