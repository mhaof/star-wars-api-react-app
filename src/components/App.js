import React, { useState, useEffect } from 'react';
import List from './List'
import 'regenerator-runtime/runtime';


function App() {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        async function fetchMovie() {
            let res = await fetch('https://swapi.dev/api/films/?format=json');
            let data = await res.json();
            setMovie(data.results);
        }
        fetchMovie();
    }, []);
    console.log('data', movies);

    return (
        <div className="App">
            <List data={movies}/>
        </div>
    )
}

export default App;