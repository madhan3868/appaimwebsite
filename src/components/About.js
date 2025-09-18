import React from 'react';

const About = () => {
  const aboutCards = [
    {
      id: 1,
      title: "Our Vision",
      description: "We connect the physical world with its digital twin so that companies can work more safely, efficiently and sustainably.",
      circleColor: "blue"
    },
    {
      id: 2,
      title: "Mission",
      description: "Businesses rely on billions of non-networked assets every day. We enable them to be networked and controlled with real-time data.",
      circleColor: "green"
    },
    {
      id: 3,
      title: "Values",
      description: "We work smartly, take care of our team, and have fun in order to ensure the sustainability and success of our organization.",
      circleColor: "orange"
    },
    {
      id: 4,
      title: "Experience",
      description: "Describe about the experience team in IoT and software development sides.",
      circleColor: "purple"
    }
  ];

  return (
    <section className="about-us" id="about">
      <div className="about-container">
        <h2 className="about-title">ABOUT US</h2>

        <div className="about-content">
          {/* Left side: cards */}
          <div className="about-cards">
            {aboutCards.map((card) => (
              <div key={card.id} className="about-card">
                <div className={`circle ${card.circleColor}`}></div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>

          {/* Right side: text */}
          <div className="about-text">
            <h3>Dweep LAB (Single Source Solution) Platform</h3>
            <p>
              Appiam internet of things platform enables change in organization to meet business demand 
              and to set competitive discriminators by delivering advanced internet of things powered solution. 
              This is achieved by integrating the normal sensors and deriving the divine insight to choose the best capable platform.
            </p>
            <p>
              We are specifically in unique position to add value to business, reduce operation, 
              limit maintenance cost and improve efficiency. We have professionals in all sector or IoT 
              to engage you with a single vendor experience to maximize efficiencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
