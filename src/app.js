import React from 'react'
import NavBar from './nav-bar'
import Cards from './cards'
import NewCard from './new-card'
import hash from './hash'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const {path} = hash.parse(location.hash)
    this.state = {
      flashcards: [],
      view: {path}
    }
    this.addCard = this.addCard.bind(this)
  }
  addCard(newCard) {
    const card = Object.assign({}, newCard)
    const cards = [...this.state.flashcards, card]
    this.setState({
      flashcards: cards
    })
  }
  renderView() {
    const {path} = this.state.view
    switch (path) {
      case 'new-card':
        return <NewCard onSubmit={this.addCard}/>
      default:
        return <Cards card={this.state.flashcards.length}/>
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const {path} = hash.parse(location.hash)
      this.setState({
        view: {path}
      })
    })
  }
  render () {
    return (
      <div>
        <NavBar/>
          {this.renderView()}
      </div>
    )
  }
}
