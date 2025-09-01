import React, { useEffect, useState } from "react";
import "./styles.css";
import { CasinoContent, Promotion } from "../data/casinoContent";

const Promotions: React.FC = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/casino")
      .then((res) => res.json())
      .then((data: CasinoContent) => {
        setPromotions(data.promotions);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Loading Promotions...</p>;

  return (
    <div className="page-container">
      <h1 className="page-title">Promotions</h1>
      <div className="cards-grid">
        {promotions.map((promo) => (
          <div key={promo.id} className="card">
            <img src={promo.imageUrl} alt={promo.title} />
            <h2>{promo.title}</h2>
            <p>{promo.snippet}</p>
            <p>Expiry: {promo.expiryDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
