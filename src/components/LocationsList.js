import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import { loctestdata } from "../testdata";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

export default function LocationsList() {
  const LocList = styled.div`
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
  const [locations, setLocations] = useState();
  const [search, setSearch] = useState("");

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (data) {
      const locsFromSearch = data.filter(loc => loc.name.toLowerCase().includes(search.toLowerCase()));
      setLocations(locsFromSearch);
    }
  }, [search]);

  //INTITALIZE DATA SET

  //test data to avoid api calls
  //   useEffect(() => {
  //     setData(loctestdata);
  //     setLocations(loctestdata);
  //   }, []);

  /*********************************************************uncomment to use API*/

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location/").then(response => {
      const apiPromises = [];
      const apiPages = response.data.info.pages;

      //USE PAGES FROM API TO CREATE LIST OF PROMISES
      for (let i = 1; i <= apiPages; i++) {
        apiPromises.push(axios.get(`https://rickandmortyapi.com/api/location/?page=${i}`));
      }

      //GET ALL THE LOCATIONS ONTO ONE DATA SET FROM MULTIPLE PROMISES
      Promise.all(apiPromises).then(responses => {
        const apiResponses = [];
        responses.map(response => {
          // apiResponses.push(response.data.results);
          response.data.results.map(element => {
            apiResponses.push(element);
          });
        });

        //SET LOCATIONS FROM API CALLS
        setData(apiResponses);
        setLocations(apiResponses);
      });
    });
  }, []);

  if (!locations) {
    return (
      <LoadingDiv>
        <Spinner style={{ width: "3rem", height: "3rem" }} color="light" type="grow" />
      </LoadingDiv>
    );
  }
  return (
    <>
      <h2>Locations</h2>
      <SearchForm search={search} handleInputChange={handleInputChange} />
      <LocList>
        {locations.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
      </LocList>
    </>
  );
}
