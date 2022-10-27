import CharacterCard from "./components/CharacterCard";

import data from "./assets/data.json";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        {
          data.map(index => {
          return <CharacterCard name={index.name} image={index.image} status={index.status} species={index.species} origin={index.origin.url} originName={index.origin.name} firstSeen={index.location.url} firstSeenIn={index.location.name} />
              })}
      </div>
    </div>
  );
}

export default App;
