import React from 'react';

const StockManagement = () => {
  const stockCards = [
    {
      id: 1,
      title: "Mission",
      description: "Businesses rely on billions of non-networked assets every day. We enable them to be networked and controlled with real-time data.",
      circleColor: "green"
    },
    {
      id: 2,
      title: "Values",
      description: "We work smartly, take care of our team, and have fun in order to ensure the sustainability and success of our organization.",
      circleColor: "orange"
    },
    {
      id: 3,
      title: "Experience",
      description: "Describe about the experience team in IoT and software development sides.",
      circleColor: "purple"
    }
  ];

  return (
    <div className="stock-container">
      <div className="stock-holder">
        <div className="stock-cards">
          {stockCards.map((card) => (
            <div key={card.id} className="stock-card">
              <div className={`circle ${card.circleColor}`}></div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        {/* <div className="img-container">
          <img src="/image.png" alt="Livestock Management" />
          <div>
            <h3>Livestock Management</h3>
            <pre>            It was observed that industrial agricultural
            companies depends strongly on manual workforce to carry out their farm activity. Due to
            global changes in economic landscape, daily basis supply demands get increasing.
            Livestock is a section farming that requires regular monitory. The IoT based system
            provide farmers with stock information directly to their smartphone. It enables livestock
            management to quickly detect spread of flue and separate infected breeds from the
            unaffected breeds.</pre>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default StockManagement;
