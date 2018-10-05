import React from 'react'
import NavBar from './nav-bar'
import Cards from './cards'
import NewCard from './new-card'
import hash from './hash'
import Edit from './edit'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const {path, params} = hash.parse(location.hash)
    const stateJson = localStorage.getItem('flashcards-app-state')
    const appState = JSON.parse(stateJson) || {}
    this.state = {
      flashcards: appState.flashcards || [],
      cardId: appState.cardId || 0,
      view: {path, params}
    }
    this.addCard = this.addCard.bind(this)
    this.editCard = this.editCard.bind(this)
  }
  addCard(newCard) {
    const card = Object.assign({}, newCard)
    const cards = [...this.state.flashcards, card]
    this.setState({
      flashcards: cards,
      cardId: this.state.cardId + 1
    })
  }
  editCard(newCard) {
    const {flashcards} = this.state
    const cardId = parseInt(this.state.view.params.cardId, 10)
    const flashcardList = flashcards.map(card => {
      if (cardId === card.id) {
        return newCard
      }
      else {
        return card
      }
    })
    this.setState({
      flashcards: flashcardList
    })
    location.hash = '#cards'
  }
  renderView() {
    const {path, params} = this.state.view
    switch (path) {
      case 'new-card':
        return <NewCard onSubmit={this.addCard} cardId={this.state.cardId}/>
      case 'edit':
        const flashcard = this.state.flashcards.find(card =>
          card.id === parseInt(params.cardId, 10))
        return <Edit findCard={flashcard} onSubmit={this.editCard}/>
      default:
        return <Cards cards={this.state.flashcards}/>
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const {path, params} = hash.parse(location.hash)
      this.setState({
        view: {path, params}
      })
    })
    window.addEventListener('beforeunload', () => {
      const { flashcards, cardId } = this.state
      const stateJson = JSON.stringify({ flashcards, cardId })
      localStorage.setItem('flashcards-app-state', stateJson)
    })
  }
  render() {
    return (
      <div>
        <NavBar/>
        {this.renderView()}
      </div>
    )
  }
}
