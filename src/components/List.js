import React, { useState } from 'react';
import Info from './Info';

function List({ data }) {
  return (
    <div>
      <h1 className="main-title">Star Wars Movies List</h1>
        <div className="list-container">
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
        
    </div>
  )
}
export default List;
