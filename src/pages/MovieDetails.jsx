import React from 'react'
import Cover from '../components/Cover'
import Cast from '../components/Cast'
import Reviews from '../components/Reviews'
import { CiCalendar } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { PiListDashesThin } from "react-icons/pi";


const MovieDetails = () => {
  return (
    <div>
        <Cover />
        <div className="movie-details container2 d-flex gap-4 flex-column flex-md-row">
            <div className="all-details col col-md-8">
                <div className="description p-3">
                    <small className="muted">Description</small>
                    <small>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</small>
                </div>
                <Cast />
                <Reviews />
            </div>
            <div className="movie-date d-flex flex-column gap-3 col p-3">
                <div className="each">
                    <small className="muted"><CiCalendar /> Released Year</small>
                    <p>2022</p>
                </div>

                <div className="each">
                    <small className="muted d-flex align-items-center gap-1"><IoLanguageOutline /> Available Languages</small>
                    <div className='d-flex gap-2'>
                        <small className="badge bg-black p-1 fw-normal">English</small>
                        <small className="badge bg-black p-1 fw-normal">Hindi</small>
                        <small className="badge bg-black p-1 fw-normal">Tamil</small>
                        <small className="badge bg-black p-1 fw-normal">Telugu</small>
                        <small className="badge bg-black p-1 fw-normal">Kannada</small>
                    </div>
                </div>

                <div className="each">
                    <small className="muted d-flex align-items-center gap-1"><CiStar /> Rating</small>
                    <div className="d-flex gap-3">
                        <div className="rating-card badge bg-black d-flex gap-1 flex-column">
                            <p>IMDb</p>
                            <img src="../../Images/rate.png" alt="" />
                        </div>
                        <div className="rating-card badge bg-black d-flex gap-1 flex-column">
                            <p>MovieBox</p>
                            <img src="../../Images/rate.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="each">
                    <small className="muted d-flex align-items-center gap-1"><PiListDashesThin />Genres</small>
                    <div className='d-flex gap-2'>
                        <small className="badge bg-black p-1 fw-normal">Action</small>
                        <small className="badge bg-black p-1 fw-normal">Adventure</small>
                    </div>
                </div>

                <div className="each">
                    <small className="muted">Director</small>
                    <div className="rating-card p-1 rounded bg-black d-flex align-items-center gap-2">
                        <img src="../../Images/cast2.png" alt="" className='cast-image2' />
                        <div className="d-flex flex-column">
                            <small className="muted">Rishab Shetty</small>
                            <small className="muted">From India</small>
                        </div>
                    </div>
                </div>

                <div className="each">
                    <small className="muted">Music</small>
                    <div className="rating-card p-1 rounded bg-black d-flex align-items-center gap-2">
                        <img src="../../Images/cast3.png" alt="" className='cast-image2' />
                        <div className="d-flex flex-column">
                            <small className="muted">B. Ajaneesh Loknath</small>
                            <small className="muted">From India</small>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    </div>
  )
}

export default MovieDetails