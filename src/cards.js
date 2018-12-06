import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const styles = {
  button: {
    color: 'white'
  },
  icon: {
    cursor: 'pointer',
    color: 'black'
  }
}

export default class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false,
      tags: []
    }
    this.toggle = this.toggle.bind(this)
    this.filterTag = this.filterTag.bind(this)
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }
  filterTag(event) {
    const updatedTopic = this.props.topics.filter(card => {
      return card.topic.search(event.target.value) !== -1
    })
    this.setState({
      tags: updatedTopic
    })
  }
  render() {
    if (this.props.cards.length === 0) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="text-center mt-3">
            <div className="h2">You have no flash cards.</div>
            <button
              type="button"
              className="btn btn-info mt-5">
              <a
                href="#new-card"
                style={styles.button}>Make One</a>
            </button>
          </div>
        </div>
      )
    }
    if (this.props.cards.length > 0) {
      return (
        <div className="container">
          <div className="float-right">
            <input type="text" placeholder="Search by tag" onChange={this.filterTag}></input>
          </div>
          <div className="row text-center mt-3">
            {
              this.props.cards.map((card, index) => {
                const id = card.id
                const url = `#edit?cardId=${id}`
                const topic = card.topic
                const tag = `#${topic}`
                return (
                  <div
                    key={index}
                    className="card shadow m-2 mt-3 w-25 border-light">
                    <div className="card-body">
                      <p className="card-text">{card.question}</p>
                      <p className="card-text">{card.answer}</p>
                      <span className="float-right">
                        <a href={url}>
                          <i
                            className="fas fa-pencil-alt mr-4"
                            style={styles.icon}></i>
                        </a>
                        <i
                          className="fas fa-trash-alt"
                          style={styles.icon}
                          onClick={this.props.deleteCard}
                          id={id}></i>
                      </span>
                      <span
                        className="float-left font-weight-light font-italic tag mt-1">
                        {tag}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }
}
