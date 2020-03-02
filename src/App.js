import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import ClassPages from './Class';
import HooksPages from './Hooks';
import './Stylesheets/master.scss';

function App() {
  const [hooks, setHooks] = useState(false);
  const PAGES = hooks ? HooksPages : ClassPages;
  return (
    <div className={hooks ? 'hooks' : 'class'}>
      <h1>{hooks ? 'Hooks' : 'Class'}</h1>
      <Router>
        <Nav setHooks={setHooks} />
        <PAGES />
      </Router>
    </div>
  );
}

export default App;
