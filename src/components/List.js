import React, { useState } from 'react';
import Info from './Info';

function List({ data }) {
  return (
    <div>
      <h1>Star Wars Movies List</h1>
        {data.map((movie) => {
          return (
            <div 
              className="movie-item"
            > 
              <Info data={movie} />
            </div>
          )  
        })}
    </div>
  )
}
export default List;
