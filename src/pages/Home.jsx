import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home    ">
      <form action="" className="form">
        <div className="test">
          <label htmlFor="">Name:</label>
          <input type="text" required />

          <label htmlFor="">Email:</label>
          <input type="email" required />

          <label htmlFor="">Age:</label>
          <input type="text" required />

          <div className="button">
            <input type="submit" className="submit" />
          </div>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Home;
