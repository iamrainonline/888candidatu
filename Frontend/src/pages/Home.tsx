import React from "react";

const Home = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="main-title">
          <span className="title-number">888</span>
          <span style={{ color: "black" }}>Sparkware</span>
        </h1>
        <p className="tagline">
          Discover the best casino games, promotions, and news all in one place!
        </p>
        <img
          className="hero-image"
          src="https://888sparkware.ro/wp-content/uploads/2020/05/pic_01.jpg"
          alt="Casino"
        />
      </div>

      <style jsx>{`
        .page-container {
          min-height: 100vh;
          color: white;
          font-family: "Segoe UI", sans-serif;
          padding: 2rem;
        }

        .hero-section {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .main-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
        }

        .title-number {
          display: block;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-text {
          display: block;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tagline {
          font-size: 1.2rem;
          color: #c0c0c0;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-image {
          width: 100%;
          max-width: 600px;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(255, 215, 0, 0.2);
        }

        @media (max-width: 768px) {
          .page-container {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
