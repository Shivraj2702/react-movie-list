import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/Showlist';
import ShowDetails from './components/ShowDeatils';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ShowList />} />  
          <Route path="/summary/:showId" element={<ShowDetails/>} />
        </Routes>
    </Router>
  );
};

export default App;

