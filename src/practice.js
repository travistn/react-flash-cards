import React from 'react'

const styles = {
  arrow: {
    cursor: 'pointer'
  }
}

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: 0,
      answerIsShown: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.changeCard = this.changeCard.bind(this)
  }
  handleToggle() {
    this.setState({
      answerIsShown: !this.state.answerIsShown
    })
  }
  changeCard(direction) {
    const index = this.state.currentCard
    switch (direction) {
      case 'left':
        this.setState({
          currentCard: index - 1
        })
        break
      case 'right':
        this.setState({
          currentCard: index + 1
        })
    }
  }
  render() {
    const {cards} = this.props
    const currentCard = this.state.currentCard
    return (
      <div className="d-flex justify-content-center mt-5">
        <span>
          <i
            className="fas fa-angle-double-left arrow mr-3"
            onClick={() => this.changeCard('left')}
            style={styles.arrow}></i>
        </span>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{cards[currentCard].question}</h5>
            <p className="card-text"></p>
          </div>
        </div>
        <span>
          <i
            className="fas fa-angle-double-right arrow ml-3"
            onClick={() => this.changeCard('right')}
            style={styles.arrow}></i>
        </span>
      </div>
    )
  }
}
