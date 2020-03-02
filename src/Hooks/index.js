import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import API from '../API';
// Components
import Form from './Form';
import CharacterList from './CharacterList';
import CharacterShow from './CharacterShow';

export default function Index() {
  // STATE
  const [characters, setCharacters] = useState([]);
  // FETCH
  function fetchCharacters() {
    fetch(API.BASE_URL)
      .then(r => r.json())
      .then(setCharacters);
  }

  // COMPONENT DID MOUNT EQUIVALENT
  useEffect(fetchCharacters, []);
  // ADDING A NEW CHARACTER TO BACKENED AND STATE
  function createNewCharacter(characterObject) {
    const config = {
      method: 'POST',
      headers: API.BASE_HEADERS,
      body: JSON.stringify(characterObject)
    };
    fetch(API.BASE_URL, config)
      .then(r => r.json())
      .then(newCharacter => {
        setCharacters([newCharacter, ...characters]);
      });
  }
  // ROUTER => FOCAL POINT OF APPLICATION
  return (
    <Switch>
      <Route
        path="/form"
        render={routerProps => (
          <Form {...routerProps} createNewCharacter={createNewCharacter} />
        )}
      />
      <Route
        exact
        path="/characters"
        render={routerProps => (
          <CharacterList {...routerProps} characters={characters} />
        )}
      />
      <Route exact path="/characters/:id" component={CharacterShow} />
    </Switch>
  );
}
