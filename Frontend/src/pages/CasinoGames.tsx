import React, { useEffect, useState } from "react";
import "./styles.css";
import { CasinoContent, CasinoGame } from "../data/casinoContent"; // adaptează calea dacă trebuie

const CasinoGames: React.FC = () => {
  const [games, setGames] = useState<CasinoGame[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/casino")
      .then((res) => res.json())
      .then((data: CasinoContent) => {
        setGames(data.casinoGames);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Loading Casino Games...</p>;

  return (
    <div className="page-container">
      <h1 className="page-title">Casino Games</h1>
      <div className="cards-grid">
        {games.map((game) => (
          <div key={game.id} className="card">
            <img src={game.imageUrl} alt={game.title} />
            <h2>{game.title}</h2>
            <p>Provider: {game.provider}</p>
            <p>RTP: {game.rtp}%</p>
            {game.isPopular && (
              <span className="badge badge-popular">🔥 Popular</span>
            )}
            {game.isNew && <span className="badge badge-new">🆕 New</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoGames;
