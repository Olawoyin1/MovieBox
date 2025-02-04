import React from 'react'
import Cover from '../components/Cover'
import Cast from '../components/Cast'
import Reviews from '../components/Reviews'
import { CiCalendar } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { PiListDashesThin } from "react-icons/pi";


const Shows = () => {
  return (
    <div>
        <Cover />
        <div className="movie-details container2 d-flex gap-4 flex-column flex-md-row">
            <div className="all-details col col-md-8">
                

                <div className="seasons p-3">
                    <p>Seasons and Episodes</p>
                    <div className="new-badge my-3 d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center gap-2'>
                            <p>Season 1</p>
                            <small className="muted">9 Episodes</small>
                        </div>
                        <button className="button2">+</button>
                    </div>

                    <div className='new-badge my-3 '>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className='d-flex align-items-center gap-2'>
                                <p>Season 2</p>
                                <small className="muted">6 Episodes</small>
                            </div>
                            <button className="button2">+</button>
                        </div>
                        <hr />

                        <div className='mt-3'>
                            <div className="episodes">
                                <div className="episode d-flex flex-sm-row flex-column align-items-center gap-3">
                                    <p>01</p>
                                    <img src="../../Images/epi.png" alt="" className='epi-img'/>
                                    <div className="epi-details">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <small className='fw-bold'>Chapter One : The Vanishing of Will Byers</small>
                                            <small className="badge">49mins</small>
                                        </div>
                                        <small className="muted d-none d-sm-block">On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.</small>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>

                        <div className='mt-3'>
                            <div className="episodes">
                                <div className="episode d-flex flex-sm-row flex-column align-items-center gap-3">
                                    <p>02</p>
                                    <img src="../../Images/epi.png" alt="" className='epi-img'/>
                                    <div className="epi-details">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <small className='fw-bold'>Chapter Two : The Vanishing of Will Byers</small>
                                            <small className="badge">49mins</small>
                                        </div>
                                        <small className="muted d-none d-sm-block">On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.</small>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>

                        <div className='mt-3'>
                            <div className="episodes">
                                <div className="episode d-flex flex-sm-row flex-column align-items-center gap-3">
                                    <p>03</p>
                                    <img src="../../Images/epi.png" alt="" className='epi-img'/>
                                    <div className="epi-details">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <small className='fw-bold'>Chapter Three : The Vanishing of Will Byers</small>
                                            <small className="badge">49mins</small>
                                        </div>
                                        <small className="muted d-none d-sm-block">On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.</small>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>

                        <div className='mt-3'>
                            <div className="episodes">
                                <div className="episode d-flex flex-sm-row flex-column align-items-center gap-3">
                                    <p>04</p>
                                    <img src="../../Images/epi.png" alt="" className='epi-img'/>
                                    <div className="epi-details">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <small className='fw-bold'>Chapter Four : The Vanishing of Will Byers</small>
                                            <small className="badge">49mins</small>
                                        </div>
                                        <small className="muted d-none d-sm-block">On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.</small>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>

                        <div className='mt-3'>
                            <div className="episodes">
                                <div className="episode d-flex flex-sm-row flex-column align-items-center gap-3">
                                    <p>05</p>
                                    <img src="../../Images/epi.png" alt="" className='epi-img'/>
                                    <div className="epi-details">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <small className='fw-bold'>Chapter Five : The Vanishing of Will Byers</small>
                                            <small className="badge">49mins</small>
                                        </div>
                                        <small className="muted d-none d-sm-block">On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.</small>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>

                        <div className='mt-3'>
                            <div className="episodes">
                                <div className="episode d-flex flex-sm-row flex-column align-items-center gap-3">
                                    <p>06</p>
                                    <img src="../../Images/epi.png" alt="" className='epi-img'/>
                                    <div className="epi-details">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <small className='fw-bold'>Chapter Six : The Vanishing of Will Byers</small>
                                            <small className="badge">49mins</small>
                                        </div>
                                        <small className="muted d-none d-sm-block">On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.</small>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>
                    </div>

                    
                    <div className="new-badge my-3 d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center gap-2'>
                            <p>Season 3</p>
                            <small className="muted">12 Episodes</small>
                        </div>
                        <button className="button2">+</button>
                    </div>

                </div>
                <div className="description mt-3 p-3">
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

export default Shows