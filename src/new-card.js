import React from 'react'
import Form from './form'

export default function NewCard(props) {
  return (
    <div>
      <Form
        onSubmit={props.onSubmit}
        cardId={props.cardId}/>
    </div>
  )
}
