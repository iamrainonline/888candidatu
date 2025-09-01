import React, { useEffect, useState } from "react";
import "./styles.css";
import { CasinoContent, CasinoNews } from "../data/casinoContent";

const News: React.FC = () => {
  const [news, setNews] = useState<CasinoNews[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/casino")
      .then((res) => res.json())
      .then((data: CasinoContent) => {
        setNews(data.casinoNews);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Loading News...</p>;

  return (
    <div className="page-container">
      <h1 className="page-title">Casino News</h1>
      <div className="cards-grid">
        {news.map((n) => (
          <div key={n.id} className="card">
            <h2>{n.title}</h2>
            <p>{n.snippet}</p>
            <p>Date: {n.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
