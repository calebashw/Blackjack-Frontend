import React, { useState } from 'react';
import axios from 'axios';

function Betting({ bankroll, setBankroll, isAuthenticated }) {
    const [bet, setBet] = useState(0);
  
    const placeBet = async () => {
        if (!isAuthenticated) {
          alert("Please log in to place a bet.");
          return;
        }
      
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/main/place-bet`, { bet }, { withCredentials: true });
          setBankroll(response.data.remaining_bankroll);
          // startGame();
        } catch (error) {
          console.error("Betting error:", error);
        }
      };
      
  
    return (
      <div>
        <h2>Bankroll: ${bankroll}</h2>
        <input
          type="number"
          value={bet}
          onChange={(e) => setBet(parseInt(e.target.value))}
          placeholder="Place your bet"
        />
        <button onClick={placeBet}>Place Bet</button>
      </div>
    );
  }  

export default Betting;
