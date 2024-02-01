import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

function ShowList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>List of Shows</h1>
      <div className="show-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {movies.map((movie) => (
          <Card sx={{ width: 250, margin: '10px',  height: '350px', borderRadius: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',  }} key={movie.show.id}>
            <CardMedia
              component="img"
              height="200"
              image={movie.show.image?.medium}
              alt={movie.show.name}
              style={{ borderRadius: '20px 20px 0 0' }}
            />
            <CardContent style={{ height: '150px', overflow: 'hidden', backgroundColor: '#9277F3' }}>
              <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '1.2rem', fontWeight: 'bold', }}>
                {movie.show.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <StarRating rating={movie.show.rating?.average || 0} />
              </Typography>
              <Link to={`/summary/${movie.show.id}`} style={{ textDecoration: 'none' }}>
                <Button size="small" variant="contained" style={{ backgroundColor: '#FA4B4B', color: 'white' }}>View</Button>
              </Link>
            </CardContent>
            
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
