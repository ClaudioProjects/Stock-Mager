import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import RoutesMain from './routes';

function App() {
  return (
    <Router>
      <Header />
      <RoutesMain />
    </Router>
  );
}

export default App;
