import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-5">
        <div className="row">
          <h1 className="mt-5">Technology</h1>
          <h3 className="text-muted mt-1">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="mt-2 mb-5">
            Check out our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              investment offerings →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
