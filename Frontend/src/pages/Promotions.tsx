import React, { useEffect, useState } from "react";
import "./styles.css";
import { CasinoContent, Promotion } from "../data/casinoContent";

const Promotions: React.FC = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIds, setExpandedIds] = useState<string[]>([]); // Track which cards are expanded

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

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  if (loading) return <p className="loading-text">Loading Promotions...</p>;

  return (
    <div className="page-container">
      <h1 className="page-title">Promotions</h1>
      <div className="cards-grid">
        {promotions.map((promo) => {
          const isExpanded = expandedIds.includes(promo.id);
          return (
            <div key={promo.id} className="card">
              <img src={promo.imageUrl} alt={promo.title} />
              <h2>{promo.title}</h2>
              <p>{promo.snippet}</p>

              {isExpanded && (
                <div className="promo-full-terms">
                  <p>{promo.fullTerms}</p>
                </div>
              )}

              <p className="expiry">Expiry: {promo.expiryDate}</p>
              <button
                className="read-more-button"
                onClick={() => toggleExpand(promo.id)}
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Promotions;
