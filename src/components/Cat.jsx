import React from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

import { IoIosTime } from "react-icons/io";


const Cat = ({ data, header, desc , arrow, trending}) => {
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };




  return (
    <div className="my-5">
      <div className="container2">
        <div className="">
          <div className="cat-header mt-3 d-flex align-items-center justify-content-between">
          <div>
              <h5>{header}</h5>
              {
                desc &&  <small className="subhead d-none d-sm-flex muted mt-3">
                Whether you're looking for a comedy to make you laugh, a drama
                to make you think, or a documentary to learn something new{" "}
              </small>
              }
             
            </div>
            <div className="d-flex align-items-center gap-2">
              <button className="button2" onClick={() => slider?.current?.slickPrev()}>
                <IoIosArrowRoundBack size={20} />
              </button>
              <button onClick={() => slider?.current?.slickNext()} className="button2">
                <IoIosArrowRoundForward size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="all-items mt-3">
          <div className="slider-container">
            <div>
             
                <>
                  <Slider ref={slider} {...settings}>
                    {data.map((item) => (

                        <>
                            <Link to="/details">
                              <div className="movie-card">
                                <div className="moviecard-img">
                                  <img className="" src={item.image} alt="" />
                                </div>

                                {
                                  trending ? (
                                    <div className="title mt-2 d-flex align-items-center justify-content-between">
                                                                   <small className='d-flex align-items-center'><IoIosTime />{item.time}</small>
                                                                   <small  className="">
                                                                   <IoMdEye />2k
                                                                   </small>
                                                               </div>
                                  ) :
                                  (
                                    <div className="title mt-2 d-flex align-items-center justify-content-between">
                                    <div className="d-flex flex-column">
                                      {item.top && <span className="badge bg-danger">Top 10 In</span>}
                                      <small className={!arrow ? "badge bg-black p-1 smaller" : ""}>{item.title}</small>
                                    </div>
                                    {
                                      arrow && <button className="">
                                      <IoIosArrowRoundForward size={20} />
                                    </button>
                                    }
                                    
                                  </div>
                                  )
                                }
                                
                              </div>
                            </Link>
                          </>
                    ))}
                  </Slider>
                </>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
