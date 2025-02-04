import React from 'react'
import { IoIosTime } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import MovieCard from './MovieCard';
import { IoMdEye } from "react-icons/io";
import { Link } from 'react-router-dom';
import Cat from './Cat';

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
            title : "Released 12 April 2024",
            image : "../../Images/Image (5).png",
            rel: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Released 9 March 2024",
            image : "../../Images/Image.png",
            rel: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Released 20 June 2024",
            image : "../../Images/Image (7).png",
            rel: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Released 22 April 2023",
            image : "../../Images/Image (8).png",
            rel: true,
        },
        {
            id:1,
            category: "Our Genres",
            title : "Released 2 May 2024",
            image : "../../Images/Image (19).png",
            rel: true,
        },
    ]
  return (
    <div className='my-4'>
        <div className="">

            <Cat
                header = "Our Genres"
                data = {data}
                desc=""
                arrow={true}
                trending={false}
            />

            <Cat
                header = "Popular Top 10 In Genres"
                data = {data1}
                desc=""
                arrow={true}
                trending={false}
            />

            <Cat
                header = "New Releases"
                data = {trending}
                desc=""
                arrow={false}
                trending={false}
            />
            
            <Cat
                header = "Trending Show Now"
                data = {latest}
                desc=""
                arrow={false}
                trending={true}
            />

        </div>
    </div>
  )
}

export default MovieList