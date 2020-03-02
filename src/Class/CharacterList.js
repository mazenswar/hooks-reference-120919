import React, { Component } from 'react';

export default class CharacterList extends Component {
  renderCharacters = () => {
    return this.props.characters.length
      ? this.props.characters.map(c => (
          <div className="card" key={c.id}>
            <img src={c.image} alt={c.name} />
            <h4>{c.name}</h4>
          </div>
        ))
      : null;
  };

  render() {
    return <div className="char-list">{this.renderCharacters()}</div>;
  }
}
