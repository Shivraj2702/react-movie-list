import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import StarRating from './StarRating';
import TicketBookingForm from './TicketBookingForm';


const ShowSummary = () => {
  const { showId } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json())
      .then(data => {
        setShowDetails(data);
      })
      .catch(error => {
        console.error('Error fetching show details:', error);
      });
  }, [showId]);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  if (!showDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ maxWidth: 600, margin: '20px', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <CardMedia
          component="img"
          height="300"
          image={showDetails.image.medium}
          alt={showDetails.name}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {showDetails.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Date: {showDetails.premiered}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <StarRating rating={showDetails.rating?.average || 0} />
          </Typography>
          <Typography variant="body1" color="text.primary">
            {showDetails.summary}
          </Typography>
        </CardContent>
        <Button onClick={handleFormToggle} variant="contained" color="primary" fullWidth>
          Book Ticket
        </Button>
      </Card>
      {showForm && <TicketBookingForm movieDetails={showDetails} />}
    </div>
  );
};

export default ShowSummary;
