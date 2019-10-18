import React from "react";
import styled from "styled-components";

export default function WelcomePage() {

  const Welcome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  `

  return (
    <Welcome>
      <header>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </Welcome>
  );
}
