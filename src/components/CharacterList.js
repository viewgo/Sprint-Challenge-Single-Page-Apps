import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import { testdata } from "../testdata";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
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

  const LoadingDiv = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const [data, setData] = useState();
  const [characters, setCharacters] = useState();
  const [search, setSearch] = useState("");

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (data) {
      const charsFromSearch = data.filter(char => char.name.toLowerCase().includes(search.toLowerCase()));
      setCharacters(charsFromSearch);
    }
  }, [search]);

  //INTITALIZE DATA SET

  //test data to avoid api calls
  // useEffect(() => {
  //   setData(testdata);
  //   setCharacters(testdata);
  // }, []);

  /*********************************************************uncomment to use API*/

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const apiPromises = [];
        const apiPages = response.data.info.pages;

        //USE PAGES FROM API TO CREATE LIST OF PROMISES
        for(let i = 1; i <= apiPages; i++){
          apiPromises.push(axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`))
        }

        //GET ALL THE CHARACTERS ONTO ONE DATA SET FROM MULTIPLE PROMISES
        Promise.all(apiPromises)
        .then(responses => {
          const apiResponses = [];
          responses.map((response) => {
            // apiResponses.push(response.data.results);
            response.data.results.map((element) => {
              apiResponses.push(element);
            })
          })

          //SET CHARACTERS FROM API CALLS
          setData(apiResponses);
          setCharacters(apiResponses);
        })
      })
  }, []);

  if (!characters) {
    return (
      <LoadingDiv>
        <Spinner style={{ width: "3rem", height: "3rem", textAlign: "center" }} color="light" type="grow" />
      </LoadingDiv>
    );
  }
  return (
    <>
      <h2>Characters</h2>
      <SearchForm search={search} handleInputChange={handleInputChange} />
      <CharList>
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </CharList>
    </>
  );
}
