import React from 'react';
import { connect } from 'react-redux';

import StyleLink from '../general/StyleLink';

import { ReactTypeformEmbed } from 'react-typeform-embed';

export default class ContactForm extends React.Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.toggleHidden.bind(this)} >
          Click to show modal
        </button>
        {!this.state.isHidden && <Modal />}
      </div>
    )
  }
}

const Modal = () => (
    <div className="mainContact__content__businessForm">
        <ReactTypeformEmbed url={'https://seedbright.typeform.com/to/mglblB'}/>
    </div>
)
