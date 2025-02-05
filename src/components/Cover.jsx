import React from 'react'
import { IoVolumeHighOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Cover = () => {
  return (
    <div>
            <div className="container2 my-3">
                <div className="movie-cover">
                  <div className="movie-info d-flex align-items-center justify-content-center flex-column  gap-2 text-center">
                    <h2 className='fw-bold'>Avengers End Game</h2>
                    <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet saepe harum illo repellendus quia impedit laboriosam corrupti pariatur repudiandae.</small>
                    <div className="buttons d-flex align-items-center gap-3">
                      <button className="button1">Play Now</button>
                      <button className="button2">+</button>
                      <button className="button2"><AiOutlineLike /></button>
                      <button className="button2"><IoVolumeHighOutline /></button>
                    </div>
    
                  </div>
    
                    <div className="actions d-flex align-items-center justify-content-between">
                      <button className="button2"><IoIosArrowRoundBack /></button>
                      <button className="button2"><IoIosArrowRoundForward /></button>
                    </div>
    
                </div>
            </div>
        </div>
  )
}

export default Cover