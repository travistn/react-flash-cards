import React from 'react'

const styles = {
  card: {
    position: 'absolute',
    top: '10rem',
    left: '20rem'
  }
}

export default class Cards extends React.Component {
  render() {
    if (this.props.card === 0) {
      return (
        <div
          className="text-center mt-3"
          style={styles.card}>
          <div className="h2">You have no flash cards.</div>
          <button
            type="button"
            className="btn btn-info mt-5"
            onClick={this.props.newCardView}>Make one</button>
        </div>
      )
    }
  }
}
