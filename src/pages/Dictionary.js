import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Dictionary() {
    const [word, setWord] = useState('');
    const navigate =  useNavigate();


    return (
        <div>
            <input type="text" onChange={(e) => {
                setWord(e.target.value);
            }} />
            <button onClick={() => {
                console.log("CLICKED SEARCH");
                navigate('/definition/' + word)
            }}>Search</button>
        </div>
  
    )


}