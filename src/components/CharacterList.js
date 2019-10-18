import React, { useEffect, useState } from "react";
import axios from "axios";
import { testdata } from "../testdata";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function CharacterList() {
  const CharList = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  `;
  const [characters, setCharacters] = useState();

  useEffect(() => {
    setCharacters(testdata);
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("https://rickandmortyapi.com/api/character/")
  //     .then(response => {
  //       const apiPromises = [];
  //       const apiPages = response.data.info.pages;

  //       //USE PAGES FROM API TO CREATE LIST OF PROMISES
  //       for(let i = 1; i <= apiPages; i++){
  //         apiPromises.push(axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`))
  //       }

  //       //GET ALL THE CHARACTERS ONTO ONE DATA SET FROM MULTIPLE PROMISES
  //       Promise.all(apiPromises)
  //       .then(responses => {
  //         const apiResponses = [];
  //         responses.map((response) => {
  //           // apiResponses.push(response.data.results);
  //           response.data.results.map((element) => {
  //             apiResponses.push(element);
  //           })
  //         })

  //         //SET CHARACTERS FROM API CALLS
  //         setCharacters(apiResponses);
  //       })
  //     })
  // }, []);

  if (!characters) {
    return <>LOADING...</>;
  }
  return (
    <>
      <h2>Characters</h2>
      <CharList>
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </CharList>
      </>
  );
}
