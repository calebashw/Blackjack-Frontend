import React from 'react';

function GameBoard({ gameData }) {
  const { player_hand, dealer_upcard, message } = gameData;

  return (
    <div>
      <h2>Blackjack Game</h2>
      <div>
        <h3>Player's Hand</h3>
        <ul>
          {player_hand.map((card, index) => (
            <li key={index}>{card}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3>Dealer's Upcard</h3>
        <p>{dealer_upcard}</p>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
}

export default GameBoard;
