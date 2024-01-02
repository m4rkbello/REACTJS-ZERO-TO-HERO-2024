import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function Definition() {
  const [word, setWord] = useState([]);
  console.log(useParams());
  let {search} = useParams();

  useEffect(() => {
    console.log('Page Loaded!');
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, []);

  return (
    <div>
      <h1>Here is a definition:</h1>
      {word.map((meaning) => (
        <p key={meaning.definitions[0].definition}>
          {meaning.definitions[0].definition}
        </p>
      ))}
    </div>
  );
}
