import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    image: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.createNewCharacter(this.state);
    this.props.history.push('/characters');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image Url"
          value={this.state.image}
          onChange={this.handleChange}
        />
        <input type="submit" value="Click meeeeeeeee" />
      </form>
    );
  }
}
