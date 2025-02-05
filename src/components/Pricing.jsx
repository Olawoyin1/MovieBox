import React, { useState } from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    desc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    priceMonthly: 9.99,
    priceYearly: 99.99,
  },
  {
    id: 2,
    name: "Standard Plan",
    desc: "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    priceMonthly: 12.99,
    priceYearly: 129.99,
  },
  {
    id: 3,
    name: "Premium Plan",
    desc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    priceMonthly: 14.99,
    priceYearly: 149.99,
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="my-5">
      <div className="container2">
        {/* Header Section */}
        <div className="d-flex align-items-md-center align-items-start flex-column flex-md-row gap-3 justify-content-between">
          <div>
            <h5>Choose the plan that's right for you</h5>
            <small className="muted">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </small>
          </div>

          {/* Toggle Buttons */}
          <div className="toggle-buttons">
            <button
              className={`button1 bg-secondary ${billingCycle === "monthly" ? "active" : ""}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`button1 bg-secondary ${billingCycle === "yearly" ? "active" : ""}`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid my-4">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="plan"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="pricing-list d-flex flex-column gap-2">
                <h6 className="fw-bold">{plan.name}</h6>
                <small className="muted">{plan.desc}</small>
                <p>
                  <span className="plan-price">
                    ${billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly}
                  </span>
                  /{billingCycle === "monthly" ? "Month" : "Year"}
                </p>
              </div>

              <div className="form-field d-flex mt-2">
                <input type="text" className="col-7" placeholder="Start Free Trial" />
                <button className="button1">Choose Plan</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
