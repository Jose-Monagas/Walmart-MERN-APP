import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const [search, setSearch] = useState('');

  return (
    <nav className="NavBar">
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {props.routes.map(({ key, path }) => (
        <Link key={key} to={path}>
          {key}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;