import React from "react";
import helloWorld from "../../images/helloworld.png";

const WelcomCard = () => {
  return (
    <div className="welcome-card">
      <div className="welcome-card-image">
        <img src={helloWorld} alt="hello world"/>
      </div>
      <div className="welcome-card-content">
        <h2>Welcome to Swedbank!</h2>
        <p>
          With 7.2 million private customers and more 1000 corporate and
          organisational customers. This makes us Sweden's largest bank in terms
          of number of customers and gives us a leading position in our other
          markets of Estonia, Latvia and Lithuania. As a major bark, we are a
          significant part of the financial system and play an important role in
          the local communities shareholders and society as a whole stay
          financially sound and sustainable.
        </p>
        <br />
        <span style={{ color: "blue" }}>Read more...</span>
      </div>
      <button type="button" className="pay-button"> Go </button>
    </div>
  );
};

export default WelcomCard;
