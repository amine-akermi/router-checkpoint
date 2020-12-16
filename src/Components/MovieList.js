import React from 'react';
import MovieCard from "./MovieCard/MovieCard";
import PropTypes from "prop-types";

function MovieList({movies,textSerach,searchRate}) {
    return (
<div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >

    
        {movies
        .filter (
            (el)=>
            el.name.toLowerCase().includes(textSerach.toLowerCase())&&
          el.rating>=searchRate
        )
        
        .map((el)=>(
            
            <MovieCard key={el.name} movie={el} />
        ))}    
        </div>
        
    )
}

export default MovieList;
MovieList.protoTypes={movies:PropTypes.arrayOf(PropTypes.object)};
