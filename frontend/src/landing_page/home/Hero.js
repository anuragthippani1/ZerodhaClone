import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="media/landing.png" alt="heroimage" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives,mutal funds,and more{" "}
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "30%", margin: " auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
