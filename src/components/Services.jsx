import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      image : "../../Images/phone.png",
      name: "Smartphones",
      icon: "icon-smartphone",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      id: 2,
      image : "../../Images/tablet.png",
      name: "Tablet",
      icon: "icon-smartphone",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      id: 3,
      image : "../../Images/tv.png",
      name: "Smart TV",
      icon: "icon-smartphone",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      id: 4,
      image : "../../Images/laptop.png",
      name: "Laptops",
      icon: "icon-smartphone",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      id: 7,
      image : "../../Images/game.png",
      name: "Gaming Consoles",
      icon: "icon-smartphone",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      id: 8,
      image : "../../Images/vr.png",
      name: "VR Headsets",
      icon: "icon-smartphone",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
  ];
  return (
    <div className="container2 mt-4">
      <div className="mt-4">
        <h5>We Provide you streaming experience across various devices.</h5>
        <small className="subhead muted mt-3">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </small>

        <div className="services-contents grid my-5">
          {services.map((items) => (
            
              <div key={items.id} className="service-card">
                <div className="card-head d-flex align-items-center gap-3">
                  <div className="image-box d-flex align-items-center justify-content-center p-1">
                    <img src={items.image} alt="" />
                  </div>
                  <p className="fw-bold">{items.name}</p>
                </div>
                <div className="service-desc mt-2 m-0">
                  <small className="muted">{items.desc}</small>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
