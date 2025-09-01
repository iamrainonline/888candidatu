import React from "react";
import "./styles.css";

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <h1 style={{ fontSize: "90px" }} className="page-title">
        888 Sparkware
      </h1>
      <p>
        Discover the best casino games, promotions, and news all in one place!
      </p>
      <img
        style={{ width: "100%" }}
        src="https://888sparkware.ro/wp-content/uploads/2020/05/pic_01.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
