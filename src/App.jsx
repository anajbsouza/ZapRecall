import React from "react";
import HomePage from "./components/HomePage";
import Deck from "./components/Deck";

function App() {
  const [welcome, setWelcome] = React.useState(true);
  return (
    <>
      {welcome ? <HomePage setWelcome={setWelcome} /> : <Deck />}
    </>
  );
}

export default App;