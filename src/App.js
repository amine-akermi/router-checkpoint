import React, { useState,useEffect} from 'react'
import{moviesData} from "./Constants/data";
import './App.css';
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/Add/Add";
import Filter from "./Components/Filter/Filter";

import MovieCard from './Components/MovieCard/MovieCard';

function App() {
 
  const [movies, setMovies] = useState(moviesData);
  const [textSerach, setTextSerach] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  const handleAdd = (newMovie) => {
    
    if (newMovie.name !== "") {
      setMovies([...movies, newMovie]);
    }
  };
  return (
    <div>
      <div className="navmenu">
       
        
        <Filter
        rating={searchRate}
        setSearchRate={setSearchRate}
       setTextSerach={setTextSerach}
        />
        
       
        
        
        <AddMovie handleAdd={handleAdd}/>
        
      
        </div>
         
      <MovieList
       searchRate={searchRate}
        textSerach={textSerach}
        movies={movies}
       />
     
      
</div>
  );
}

export default App;
