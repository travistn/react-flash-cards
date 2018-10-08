import React from 'react'
import Cards from './cards'

export default class Practice extends React.Component {
  render() {
    if (this.props.cardId) {
      return (
        <Cards/>
      )
    }
  }
}
