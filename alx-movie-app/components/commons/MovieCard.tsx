import React from 'react';

const MovieCard = ({ title }: { title: string }) => {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCard;