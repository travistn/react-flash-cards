import React from 'react'

const styles = {
  card: {
    position: 'absolute',
    top: '10rem',
    left: '20rem'
  }
}

function NoCards() {
  return (
    <div
      className="text-center"
      style={styles.card}>
      <div className="h2">You have no flash cards.</div>
      <button
        type="button"
        className="btn btn-info mt-5">Make one</button>
    </div>
  )
}

export default function Cards(props) {
  if (props.card === 0) {
    return (
      <NoCards/>
    )
  }
}
