import React from 'react'
import Form from './form'
import NavBar from './nav-bar'
import Cards from './cards'
import NewCard from './new-card'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: [],
      view: {
        path: '',
        params: {}
      }
    }
    this.addCard = this.addCard.bind(this)
    this.renderView = this.renderView.bind(this)
  }
  addCard(newCard) {
    const card = Object.assign({}, newCard)
    const cards = [...this.state.flashcards, card]
    this.setState({
      flashcards: cards
    })
  }
  renderView() {
    const {path, params} = this.state.view
    switch (path) {
      case 'new-card':
        return <NewCard/>
      default:
        return <Cards/>
    }
  }
  render () {
    return (
      <div>
        <NavBar/>
          {this.renderView}
        <Form
          onSubmit={this.addCard}/>
      </div>
    )
  }
}
