
import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const TicketBookingForm = ({ movieDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const userData = {
      movie: movieDetails.name,
      name: formData.name,
      email: formData.email,
    };
    localStorage.setItem('userData', JSON.stringify(userData))
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: 300, margin: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom style={{ color: '#333' }}>
            Booking Form
          </Typography>
          <Typography variant="body1" gutterBottom style={{ color: '#555' }}>
            Movie: {movieDetails.name}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
              style={{ marginBottom: '15px' }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              style={{ marginBottom: '15px' }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TicketBookingForm;
