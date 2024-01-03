import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import NotFound from "../components/NotFound";

export default function Definition() {
  const [word, setWord] = useState([]);
  const [notFound, setNotFound] = useState(false);
  console.log(useParams());
  let { search } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    console.log('Page Loaded!');
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
      .then((response) => {
        if (response.status === 400) {
          setNotFound(true);
          console.log(response.status);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data[0] && data[0].meanings) {
          setWord(data[0].meanings);
          console.log(data[0].meanings);
        } else {
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setNotFound(true);
      });
  }, [search]);

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary" className="mt-60 text-center">
        <h2>
        Search 
        </h2>
        </Link>
      </>
    );
  }


  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition:</h1>
          {word.map((meaning) => (
            <p key={meaning.definitions[0].definition}>
              {meaning.definitions[0].definition}
            </p>
          ))}
        </>
      ) : null}
    
    </>
  );
}
