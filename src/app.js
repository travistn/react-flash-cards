import React from 'react'
import Form from './form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: []
    }
    this.addCard = this.addCard.bind(this)
  }
  addCard(newCard) {
    const card = Object.assign({}, newCard)
    const cards = [...this.state.flashcards, card]
    this.setState({
      flashcards: cards
    })
    console.log(this.state)
  }
  render () {
    return (
      <Form
        onSubmit={this.addCard}/>
    )
  }
}
