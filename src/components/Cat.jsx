import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import MovieCard from "./MovieCard";

const Cat = () => {

    const data = [
        {
            id:1,
            category: "Our Genres",
            title : "Action",
            image : "../../Images/mix.png"
        },
        {
            id:1,
            category: "Our Genres",
            title : "Adventure",
            image : "../../Images/mix1.png"
        },
        {
            id:1,
            category: "Our Genres",
            title : "Comedy",
            image : "../../Images/container (10).png"
        },
        {
            id:1,
            category: "Our Genres",
            title : "Drama",
            image : "../../Images/container (11).png"
        },
        {
            id:1,
            category: "Our Genres",
            title : "Horror",
            image : "../../Images/container (12).png"
        },
    ]

  return (
    <div className="container2">
      <div className="my-4 py-4">


        <div className="movielist-header">
          <div className="cat-header mt-3 d-flex align-items-center justify-content-between">
            <div>
                <h5>Explore our wide variety of categories</h5>
                <small className="subhead muted mt-3">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new </small>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button className="button2 bg-black">
                <IoIosArrowRoundBack size={20} />
              </button>
              <button className="button2 bg-black">
                <IoIosArrowRoundForward size={20} />
              </button>
            </div>
          </div>

          <div className="movielist-items d-flex gap-4 my-4">
                {
                    data.map((items)=>(
                       <MovieCard 
                        title={items.title}
                        image={items.image}
                       />
                    ))
                }
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
