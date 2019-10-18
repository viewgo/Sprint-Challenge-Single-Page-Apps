import React from "react";
import styled from "styled-components";

export default function LocationCard(props) {
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
    
    padding: 0;
    background-color: #393e46aa;
    font-size: 1.4rem;
    width: 100%;
  `


  return (
    <Card>
      <NameText>{props.location.name}</NameText>
      <p>Type: {props.location.type}</p>
      <p>Dimension: {props.location.dimension}</p>
      
    </Card>
  );
}
