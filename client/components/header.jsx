import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>{props.text}</h1>
      <h2>{props.average}</h2>
    </header>
  );
}

export default Header;
