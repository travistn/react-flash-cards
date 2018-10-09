import React from 'react'

const styles = {
  arrow: {
    cursor: 'pointer'
  },
  leftArrow: {
    position: 'relative',
    right: '48rem',
    top: '5rem'
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
    const {cards} = this.props
    const index = this.state.currentCard
    switch (direction) {
      case 'left':
        if (index === 0) {
          this.setState({
            currentCard: cards.length - 1
          })
        }
        else {
          this.setState({
            currentCard: index - 1
          })
        }
        break
      case 'right':
        if (index === cards.length - 1) {
          this.setState({
            currentCard: 0
          })
        }
        else {
          this.setState({
            currentCard: index + 1
          })
        }
    }
  }
  render() {
    const {cards} = this.props
    const {answerIsShown} = this.state
    const currentCard = this.state.currentCard
    let answerIcon = 'fas fa-chevron-circle-right mr-2'
    if (answerIsShown) {
      answerIcon += ' rotate '
    }
    const progress = (currentCard + 1) / cards.length * 100
    return (
      <div className="d-flex flex-wrap justify-content-center mt-5">
        <div className="progress w-50">
          <div
            className="progress-bar progress-bar-striped bg-info progress-bar-animated"
            role="progressbar"
            style={{width: progress + '%'}}>
          </div>
        </div>
        <span>
          <i
            className="fas fa-angle-double-left arrow mr-3 mt-5"
            onClick={() => this.changeCard('left')}
            style={styles.leftArrow}></i>
        </span>
        <div className="card w-50 text-center shadow border-light">
          <div className="card-body">
            <h5 className="card-title mt-3">{cards[currentCard].question}</h5>
            <p className="card-text mt-4">
              <i
                className={answerIcon}
                onClick={this.handleToggle}
                style={styles.arrow}></i>
              Show Answer</p>
            <p className={answerIsShown ? 'is-shown' : 'hidden'}>{cards[currentCard].answer}</p>
          </div>
        </div>
        <span>
          <i
            className="fas fa-angle-double-right arrow ml-3 mt-5"
            onClick={() => this.changeCard('right')}></i>
        </span>
      </div>
    )
  }
}
