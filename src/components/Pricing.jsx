import React from "react";

const Pricing = () => {
  const pricing = [
    {
      id: 1,
      name: "Basic Plan",
      desc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: 9.99,
    },
    {
      id: 2,
      name: "Standard Plan",
      desc: "Access to a wider selection of movies and shows, including most new releases and exclusive content ",
      price: 12.99,
    },
    {
      id: 3,
      name: "Premium Plan",
      desc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      price: 14.99,
    },
  ];

  return (
    <div className="my-5">
      <div className="container2">
        <div className="d-flex align-items-md-center align-items-start flex-column flex-md-row gap-3 justify-content-between">
          <div>
            <h5>Choose the plan that's right for you</h5>
            <small className="muted">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </small>
          </div>
          <div>
            <button className="button1 bg-secondary">Monthly</button>
            <button className="button1 bg-black">Yearly</button>
          </div>
        </div>
          
        <div className="grid my-4">
          {pricing.map((items) => (
            <div key={items.id} className="plan">
              <div className="pricing-list d-flex flex-column gap-2">
                <h6 className="fw-bold">{items.name}</h6>
                <small className="muted">{items.desc}</small>
                <p>
                  <span className="plan-price">${items.price}</span>/month
                </p>
              </div>
              <div className="form-field d-flex mt-2">
                <input type="text" placeholder="Start Free Trial" />
                <button className="button1">Choose Plan</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
