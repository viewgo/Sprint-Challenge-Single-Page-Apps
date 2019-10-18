import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/LocationsList";

import { Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";


export default function App() {
  return (
    <main>
      <Header />
      <Navigation/>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
    </main>
  );
}
