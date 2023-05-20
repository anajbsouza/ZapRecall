import React from "react";
import HomePage from "./components/HomePage";
import Deck from "./components/Deck";
import GlobalStyles from "./GlobalStyles";


function App() {
  const [welcome, setWelcome] = React.useState(true);
  return (
    <>
      <GlobalStyles />
      {welcome ? <HomePage setWelcome={setWelcome} /> : <Deck />}
    </>
  );
}

export default App;