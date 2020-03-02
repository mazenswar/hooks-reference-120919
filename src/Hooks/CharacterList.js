import React from 'react';

export default function CharacterList({ characters }) {
  function renderCharacters() {
    return characters.length
      ? characters.map(c => (
          <div className="card" key={c.id}>
            <img src={c.image} alt={c.name} />
            <h4>{c.name}</h4>
          </div>
        ))
      : null;
  }

  return <div className="char-list">{renderCharacters()}</div>;
}
