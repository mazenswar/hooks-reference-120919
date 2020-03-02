import React, { useState, useEffect } from 'react';
import API from '../API';
import { useParams } from 'react-router-dom';

export default function CharacterShow() {
  // STATE
  const [character, setCharacter] = useState({});
  // PARAMS FROM URL
  const { id } = useParams();
  // FETCH HELPER
  function fetchCharacter() {
    fetch(API.CHAR_URL(id))
      .then(r => r.json())
      .then(setCharacter);
  }
  // COMPONENT DID MOUNT EQUIVALENT
  useEffect(fetchCharacter, []);
  // JSX
  if (character.id) {
    return (
      <div>
        <img src={character.image} alt={character.name} />
        <h4>{character.name}</h4>
      </div>
    );
  }
  return null;
}
