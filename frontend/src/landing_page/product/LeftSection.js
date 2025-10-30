import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={`${productName} Image`} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo →
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More →
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/google-play-badge.svg" alt="Google Play Store" />
            </a>
            <a href={appStore} style={{ marginLeft: "30px" }}>
              <img src="media/appstore-badge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
