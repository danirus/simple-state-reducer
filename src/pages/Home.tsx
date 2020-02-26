import React from 'react';
import { NavLink } from 'react-router-dom';

import { StateCtx } from '../contexts';


const content = [
  { href: '/about', text: 'About' },
  { href: '/settings', text: 'Settings' },
];

export default function Home() {
  const { state } = React.useContext(StateCtx);
  const { username } = state;

  return (
    <React.Fragment>
      <h4>
        Home page {
          username
            ? (`(of ${username})`)
            : null
        }
      </h4>
      <ul>
        {content.map((item: any, key: any) => (
          <li key={key}>
            <NavLink to={item.href}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
