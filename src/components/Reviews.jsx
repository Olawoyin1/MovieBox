import React from 'react'

const Reviews = () => {
  return (
    <div className='reviews my-3 p-3'>
        <div className="">
            <div className="review-header d-flex align-items-center justify-content-between">
                <small className="muted">Reviews</small>
                <button className="button4"><small className='badge p-1 bg-black'>+ Add Your Review</small></button>
            </div>


            <div className="review d-flex flex-wrap gap-3 mt-3">
                <div className="review-item bg-black p-3">
                    <div className="r-header d-flex align-items-center justify-content-between">
                        <div className="name d-flex flex-column">
                            <p>Olawoyin Gbolahan</p>
                            <small className="muted">From Nigeria</small>
                        </div>
                        <img src="../../Images/rate.png" className='rate-image' alt="" />
                    </div>
                    <div className="r-content mt-3">
                        <small className="muted">This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.</small>
                    </div>
                </div>


               
                <div className="review-item bg-black p-3">
                    <div className="r-header d-flex align-items-center justify-content-between">
                        <div className="name d-flex flex-column">
                            <p>Olawoyin Gbolahan</p>
                            <small className="muted">From Nigeria</small>
                        </div>
                        <img src="../../Images/rate.png" className='rate-image' alt="" />
                    </div>
                    <div className="r-content mt-3">
                        <small className="muted">This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.</small>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Reviews