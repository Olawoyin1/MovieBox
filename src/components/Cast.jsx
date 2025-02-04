import React from 'react'

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Cast = () => {

    const casts = [
        "../../Images/cast1.png",
        "../../Images/cast2.png",
        "../../Images/cast3.png",
        "../../Images/cast4.png",
        "../../Images/cast7.png",
        "../../Images/cast8.png",
        "../../Images/cast9.png",
        "../../Images/cast4.png",
        "../../Images/cast7.png",
    ]
  return (
    <div className='all-casts my-3  p-3'>
        <div className="cast-header d-flex align-items-center justify-content-between">
            <small className="muted">Cast</small>
            <div className="arrow d-flex align-items-center gap-2">
                <button className="button2"><IoIosArrowRoundBack /></button>
                <button className="button2"><IoIosArrowRoundForward /></button>
            </div>
        </div>
        <div className="casts d-flex gap-2 mt-3">
            {
                casts.map(item => (

                    <img src={item} alt={item} className='cast-image' />
                ))
            }
        </div>
    </div>
  )
}

export default Cast