import React, { useEffect, useState } from "react";
import "./styles.css";
import { CasinoContent, CasinoNews } from "../data/casinoContent";

const News: React.FC = () => {
  const [news, setNews] = useState<CasinoNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

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

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((nid) => nid !== id) : [...prev, id]
    );
  };

  if (loading) return <p className="loading-text">Loading News...</p>;

  return (
    <div className="page-container">
      <h1 className="page-title">Casino News</h1>
      <div className="cards-grid">
        {news.map((n) => {
          const isExpanded = expandedIds.includes(n.id);
          return (
            <div key={n.id} className="card">
              <h2>{n.title}</h2>
              <p>Date: {n.date}</p>
              <p>{n.snippet}</p>

              {isExpanded && (
                <div className="news-full-content">
                  <p>{n.fullContent}</p>
                  {n.tags.length > 0 && (
                    <div className="news-tags">
                      {n.tags.map((tag) => (
                        <span key={tag} className="badge news-badge">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <button
                className="read-more-button"
                onClick={() => toggleExpand(n.id)}
              >
                {isExpanded ? "Show Less" : "Read Article"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
