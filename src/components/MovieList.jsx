import React from 'react'
import { IoIosTime } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import MovieCard from './MovieCard';
import { IoMdEye } from "react-icons/io";

const MovieList = () => {

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

    const latest = [
        {
            id:1,
            category: "Our Genres",
            time : "1hr 30mins",
            image : "../../Images/Image (13).png"
        
        },
        {
            id:1,
            category: "Our Genres",
            time : "1hr 20mins",
            image : "../../Images/Image (14).png"
        },
        {
            id:1,
            category: "Our Genres",
            time : "2hr 10mins",
            image : "../../Images/Image (10).png"
        },
        {
            id:1,
            category: "Our Genres",
            time : "1hr 40mins",
            image : "../../Images/Image (17).png"
        },
        {
            id:1,
            category: "Our Genres",
            time : "1hr 22mins",
            image : "../../Images/Image (18).png"
        },
    ]
    
    const data1 = [
        {
            id:1,
            category: "Our Genres",
            title : "Action",
            image : "../../Images/container (5).png",
            top: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Adventure",
            image : "../../Images/container (6).png",
            top: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Comedy",
            image : "../../Images/container (10).png",
            top: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Drama",
            image : "../../Images/container (8).png",
            top: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Horror",
            image : "../../Images/container (9).png",
            top: true,
        },
    ]
    
    const trending = [
        {
            id:1,
            category: "Our Genres",
            title : "Released at 12 April 2024",
            image : "../../Images/Image (5).png",
            rel: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Released at 9 March 2024",
            image : "../../Images/Image.png",
            rel: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Released at 20 June 2024",
            image : "../../Images/Image (7).png",
            rel: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Released at 22 April 2023",
            image : "../../Images/Image (8).png",
            rel: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Released at 2 May 2024",
            image : "../../Images/Image (19).png",
            rel: true,
        },
    ]
  return (
    <div className='my-4'>
        <div className="container2">


            <div className="movielist-header">
                <div className="cat-header mt-3 d-flex align-items-center justify-content-between">
                    <h5 className="fw-bold ">Our Genres</h5>
                    <div className="d-flex next align-items-center gap-2">
                        <button className="button2">
                            <IoIosArrowRoundBack size={20} />
                        </button>
                        <button  className="button2">
                            <IoIosArrowRoundForward size={20} />
                        </button>
                    </div>
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





            {/* new other nes lol  */}
            <div className="movielist-header">
                <div className="cat-header mt-3 d-flex align-items-center justify-content-between">
                    <h5 className="fw-bold ">Popular Top 10 In Genres</h5>
                    <div className="d-flex next align-items-center gap-2">
                        <button className="button2">
                            <IoIosArrowRoundBack size={20} />
                        </button>
                        <button  className="button2">
                            <IoIosArrowRoundForward size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="movielist-items d-flex gap-4 my-4">
                {
                    data1.map((items)=>(
                       <MovieCard 
                        title={items.title}
                        image={items.image}
                        top={items.top}
                       />
                    ))
                }
                
            </div>
           
           
            <div className="movielist-header">
                <div className="cat-header mt-3 d-flex align-items-center justify-content-between">
                    <h5 className="fw-bold ">New Releases</h5>
                    <div className="d-flex next align-items-center gap-2">
                        <button className="button2">
                            <IoIosArrowRoundBack size={20} />
                        </button>
                        <button  className="button2">
                            <IoIosArrowRoundForward size={20} />
                        </button>
                    </div>
                </div>
            </div>


            <div className="movielist-items d-flex gap-4 my-4">
                {
                    trending.map((items)=>(
                       <div className="movie-card">
                           <img className='moviecard-img' src={items.image} alt="" />
                           <div className="title mt-2 d-flex align-items-center justify-content-between">
                               
                               <div className='d-flex flex-column align-items-center justify-content-center'>
                               <small className='badge bg-black p-1 muted'>{items.title}</small>
                               </div>
                           </div>
                       </div>
                    ))
                }
                
            </div>





            {/* new other nes lol  */}
            <div className="movielist-header">
                <div className="cat-header mt-3 d-flex align-items-center justify-content-between">
                    <h5 className="fw-bold ">Trending Show Now</h5>
                    <div className="d-flex next align-items-center gap-2">
                    <button className="button2">
                        <IoIosArrowRoundBack size={20} />
                    </button>
                    <button  className="button2">
                        <IoIosArrowRoundForward size={20} />
                    </button>
                    </div>
                </div>
            </div>

            <div className="movielist-items d-flex gap-4 my-4">
                {
                    latest.map((items)=>(
                       <div className="movie-card">
                           <img className='moviecard-img' src={items.image} alt="" />
                           <div className="title mt-2 d-flex align-items-center justify-content-between">
                               <small className='d-flex align-items-center'><IoIosTime />{items.time}</small>
                               <small  className="">
                               <IoMdEye />2k
                               </small>
                           </div>
                       </div>
                    ))
                }
                
            </div>


        </div>
    </div>
  )
}

export default MovieList