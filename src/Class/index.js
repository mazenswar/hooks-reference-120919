import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import API from '../API';
// Components
import Form from './Form';
import CharacterList from './CharacterList';
import CharacterShow from './CharacterShow';

export default class Index extends Component {
  state = {
    characters: []
  };
  componentDidMount() {
    fetch(API.BASE_URL)
      .then(r => r.json())
      .then(characters => {
        this.setState({ characters });
      });
  }

  createNewCharacter = newCharacterObj => {
    const config = {
      method: 'POST',
      headers: API.BASE_HEADERS,
      body: JSON.stringify(newCharacterObj)
    };
    fetch(API.BASE_URL, config)
      .then(r => r.json())
      .then(newCharacter => {
        this.setState({
          characters: [newCharacter, ...this.state.characters]
        });
      });
  };
  render() {
    return (
      <Switch>
        <Route
          path="/form"
          render={routerProps => (
            <Form
              {...routerProps}
              createNewCharacter={this.createNewCharacter}
            />
          )}
        />
        <Route
          exact
          path="/characters"
          render={routerProps => (
            <CharacterList
              {...routerProps}
              characters={this.state.characters}
            />
          )}
        />
        <Route exact path="/characters/:id" component={CharacterShow} />
      </Switch>
    );
  }
}
