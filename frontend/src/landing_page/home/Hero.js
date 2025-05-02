import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center justify-content-center">
        <img src="media/images/stock-market-analysis.jpg" alt="Hero Image" className="mb-3" style={{height:"350px",width:"700px"}} />
        {/* <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        /> */}
        <h1 className="mt-5" style={{fontSize:"3rem"}}>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <Link style={{color:"white"}} to='/signup'>Signup Now</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
