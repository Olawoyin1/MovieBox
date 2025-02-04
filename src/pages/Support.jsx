import React from 'react'
import FAQ from '../components/FAQ'
import Trial from '../components/Trial'

const Support = () => {
  return (
    <div>
        <div className="container2">

            <div className="d-flex flex-column flex-md-row gap-4 m-0 my-4">
                <div className="col d-flex flex-column gap-3 p-0">
                    <h4>Welcome To Our Support Page!</h4>
                    <small className="muted">We're here to help you with any problems you may be having with our product.</small>

                    <div className="image-support-box">
                        <img src="../../Images/heroo.jpg" alt="" />
                    </div>
                </div>



                <div className="col-md-8">
                    <form action="" className='p-4 d-flex flex-column gap-3'>
                        <div className="m-0 gap-md-0 gap-3 row">
                            <div className="input-field  col-md-6">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" className='input' placeholder='Enter First Name' />
                            </div>

                            <div className="input-field col-md-6">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" className='input' placeholder='Enter Last Name' />
                            </div>
                        </div>

                        <div className="row gap-md-0 gap-3">
                            <div className="input-field col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="email" className='input' placeholder='Enter Email' />
                            </div>

                            <div className="input-field col-md-6">
                                <label htmlFor="firstname">Phone Number</label>
                                <input type="text" className='input' placeholder='Enter Phone Number' />
                            </div>
                        </div>


                        <div className="input-field p-2">
                            <label htmlFor="firstname">Message</label>
                            <textarea name="" id="" placeholder='Enter Phone Message'></textarea>
                        </div>


                        <div className="d-flex align-items-center justify-content-between p-2">
                            <div className='d-flex align-items-center gap-2'>
                                <input type="checkbox" name="" id="" />
                                <small className="muted">I agree with Terms of Use and Privacy Policy</small>
                            </div>
                            <button className="button1">Send Message</button>
                        </div>

                    </form>
                </div>
            </div>





        </div>
        
            <FAQ />
            <Trial />
    </div>
  )
}

export default Support