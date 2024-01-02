import { useState, useEffect } from "react";

export default function Definition() {
  const [word, setWord] = useState([]);

  useEffect(() => {
    console.log('Page Loaded!');
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fuck')
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, []);

  return (
    <div>
      <h2>Here is a definition:</h2>
      {word.map((meaning) => (
        <p key={meaning.definitions[0].definition}>
          {meaning.definitions[0].definition}
        </p>
      ))}
    </div>
  );
}
