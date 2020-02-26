import React from 'react';
import { NavLink } from 'react-router-dom';

import { StateCtx } from '../contexts';
import { ActionTypes } from '../reducers';


export default function About() {
  const { state, dispatch } = React.useContext(StateCtx);
  const [name, setName] = React.useState<string>(state.username);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value as string);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Submitting form with: ${name}`);
    dispatch({ type: ActionTypes.SET_USERNAME, username: name });
  }

  return (
    <React.Fragment>
      <h4>About {name}</h4>
      <form onSubmit={handleSubmit}>
        User:&nbsp;
        <input type="text" value={name} onChange={handleChange} />
        &nbsp;<input type="submit" value="Save" />
      </form>
      <hr />
      <NavLink to="/">Home</NavLink>
    </React.Fragment>
  );
};
