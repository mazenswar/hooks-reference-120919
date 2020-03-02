import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ setHooks }) {
  return (
    <nav>
      <Link to="/" onClick={() => setHooks(true)}>
        Hooks
      </Link>
      <Link to="/" onClick={() => setHooks(false)}>
        Class
      </Link>
      <Link to="/characters">All Characters</Link>
      <Link to="/form">New Character</Link>
    </nav>
  );
}
