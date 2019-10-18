import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {

    const Nav = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    div{
        margin: 1rem;
    }

    a{
        color: #d65a31;
        text-decoration: none;
    }
    `
  return (
    <Nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/characters">Characters</Link>
      </div>
      <div>
        <Link to="/locations">Locations</Link>
      </div>
    </Nav>
  );
};

export default Navigation;
