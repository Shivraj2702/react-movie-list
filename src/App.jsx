

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ShowList from './components/Showlist';
import ShowSummary from './components/ShowSummary';



const App = () => {
  return (
    <Router>
        
        
        <Routes>
          <Route path="/" element={<ShowList />} />  
          <Route path="/summary/:showId" element={<ShowSummary />} />
        </Routes>
        
        
      
    </Router>
  );
};

export default App;

