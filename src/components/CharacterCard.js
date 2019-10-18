import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  const Card = styled.div`
    width: 25%;
    background-color: #393e46;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 -1px 0 #d65a31, 0 0 5px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);

    @media (max-width: 1200px) {
      width: 40%;
    }

    @media (max-width: 800px) {
      width: 70%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  `;

  const NameText = styled.h3`  
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    background-color: #393e46aa;
    font-size: 1.4rem;
    width: 100%;
  `

  const ImageNameContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  `

  return (
    <Card>
      <ImageNameContainer>
      <img src={props.character.image}></img>
      <NameText>{props.character.name}</NameText>
      </ImageNameContainer>
      <p>Status: {props.character.status}</p>
      <p>Species: {props.character.species}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Origin: {props.character.origin.name}</p>
      <p>Location: {props.character.location.name}</p>
      
    </Card>
  );
}
