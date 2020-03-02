import React, { Component } from 'react';
import API from '../API';

export default class CharacterShow extends Component {
  state = {};
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(API.CHAR_URL(id))
      .then(r => r.json())
      .then(char => {
        this.setState({
          ...char
        });
      });
  }

  render() {
    console.log(this.state);
    if (this.state.id) {
      return (
        <div>
          <img src={this.state.image} alt={this.state.name} />
          <h4>{this.state.name}</h4>
        </div>
      );
    }
    return null;
  }
}
