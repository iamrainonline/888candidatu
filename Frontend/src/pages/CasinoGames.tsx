import React, { useEffect, useState } from "react";
import "./styles.css";
import { CasinoContent, CasinoGame } from "../data/casinoContent";

const categories = ["slots", "live-casino", "table-games", "jackpot"]; // Add more as needed

const CasinoGames: React.FC = () => {
  const [games, setGames] = useState<CasinoGame[]>([]);
  const [filteredGames, setFilteredGames] = useState<CasinoGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3000/api/casino")
      .then((res) => res.json())
      .then((data: CasinoContent) => {
        setGames(data.casinoGames);
        setFilteredGames(data.casinoGames);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter by search + category
    const filtered = games.filter((game) => {
      const matchesSearch = game.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory
        ? game.categories.includes(selectedCategory)
        : true;
      return matchesSearch && matchesCategory;
    });
    setFilteredGames(filtered);
  }, [searchTerm, selectedCategory, games]);

  if (loading) return <p className="loading-text">Loading Casino Games...</p>;

  return (
    <div className="page-container">
      <h1 className="page-title">Casino Games</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() =>
              setSelectedCategory(selectedCategory === cat ? "" : cat)
            }
          >
            {cat.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {filteredGames.map((game) => (
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
