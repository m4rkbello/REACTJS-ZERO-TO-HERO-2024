import { useState, useEffect } from "react";

export default function Dictionary() {
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(() => {
        console.log("State updated!", word+'');
    }, [word], [word2]);

    
    useEffect(() => {
        console.log("State updated!", word2);
    }, [word2]);


    return (
        <>
            <input type="text" onChange={(e) => {
                setWord(e.target.value);
            }} />
            <h1>Let's get the defination for {word} </h1>
            <hr />
            <input type="text" onChange={(e) => {
                setWord2(e.target.value);
            }}
            />
            <h1>Word defincatiuon 2: {word2} </h1>
        </>
    )


}