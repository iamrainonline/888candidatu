import React, { useEffect, useState } from "react";

interface CasinoGame {
  id: string;
  title: string;
  provider: string;
  categories: string[];
  imageUrl: string;
  description: string;
  rtp: number;
  volatility: string;
  isNew?: boolean;
  isPopular?: boolean;
}

interface CasinoContent {
  casinoGames: CasinoGame[];
  // poți adăuga aici promotions și casinoNews dacă vrei
}

const CasinoList: React.FC = () => {
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

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Casino Games</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {games.map((game) => (
          <div
            key={game.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={game.imageUrl}
              alt={game.title}
              style={{ width: "100%" }}
            />
            <h3>{game.title}</h3>
            <p>Provider: {game.provider}</p>
            <p>RTP: {game.rtp}%</p>
            {game.isPopular && <span>🔥 Popular</span>}
            {game.isNew && <span>🆕 New</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoList;
