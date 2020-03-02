import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const initialState = {
  name: '',
  image: ''
};

export default function Form({ createNewCharacter }) {
  // STATE
  const [form, setForm] = useState(initialState);
  const history = useHistory();
  // EVENT HANDLERS
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    createNewCharacter(form);
    history.push('/characters');
  }
  // JSX
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image Url"
        value={form.image}
        onChange={handleChange}
      />
      <input type="submit" value="Click meeeeeeeee" />
    </form>
  );
}
