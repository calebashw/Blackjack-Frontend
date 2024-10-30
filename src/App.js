import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Betting from './Betting';
import GameBoard from './GameBoard';
import axios from 'axios';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bankroll, setBankroll] = useState(1000);
  const [gameData, setGameData] = useState(null);

  // Function to start a new game
  const startGame = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/start-game`, {}, { withCredentials: true });
    setGameData(response.data);
  };

  return (
    <Router>
      <div className="App">
        <h1>Blackjack Game</h1>
        <Routes>
          {/* Default route to home page */}
          <Route path="/" element={<Home />} />
          
          {/* Login route */}
          <Route 
            path="/login" 
            element={<Login setAuthenticated={setIsAuthenticated} />} 
          />
          
          {/* Register route */}
          <Route 
            path="/register" 
            element={<Register />} 
          />

          {/* Protected route for game components */}
          <Route 
            path="/game" 
            element={
              isAuthenticated ? (
                <>
                  <Betting 
                    bankroll={bankroll} 
                    setBankroll={setBankroll} 
                    startGame={startGame} 
                    isAuthenticated={isAuthenticated} 
                  />
                  {gameData && <GameBoard gameData={gameData} />}
                </>
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
