import React from 'react'

const Plan = () => {
  return (
    <div className='py-4'>
        <div className="container2">
            <div>
                <h5>Compare our plans and find the right one for you</h5>
                <small className="muted">
                StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.
                </small>
            </div>


            {/* Plan Table */}
            <table className='my-4 d-none d-md-block'>
                <thead>
                    <tr>
                        <th>Features</th>
                        <th>Basic</th>
                        <th>Standard</th>
                        <th>Premium</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Price</td>
                        <td>$9.99/Month</td>
                        <td>$12.99/Month</td>
                        <td>$14.99/Month</td>
                    </tr>
                    
                    <tr>
                        <td>Content</td>
                        <td>Access to a wide selection of movies and shows, including some new releases.</td>
                        <td>Access to a wider selection of movies and shows, including most new releases and exclusive content</td>
                        <td>Access to a widest selection of movies and shows, including all new releases and Offline Viewing</td>
                    </tr>


                    <tr>
                        <td>Devices</td>
                        <td>Watch on one device simultaneously</td>
                        <td>Watch on Two device simultaneously</td>
                        <td>Watch on Four device simultaneously</td>
                    </tr>



                    <tr>
                        <td>Free Trial</td>
                        <td>7 Days</td>
                        <td>7 Days</td>
                        <td>7 Days</td>
                    </tr>



                    <tr>
                        <td>Cancel Anytime</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>



                    <tr>
                        <td>HDR</td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>



                    <tr>
                        <td>Dolby Atmos</td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>



                    <tr>
                        <td>Ads Free</td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>



                    <tr>
                        <td>Offline Viewing</td>
                        <td>No</td>
                        <td>Yes, For Select Titles</td>
                        <td>Yes, For All Titles</td>
                    </tr>



                    <tr>
                        <td>Family Sharing</td>
                        <td>No</td>
                        <td>Yes, Up to 4 family members</td>
                        <td>Yes, Up to 7 family members</td>
                    </tr>




                </tbody>
            </table>

            {/* ========FOR SMALLER DEVICES ========= */}
            <div className="select d-md-none my-4 d-flex align-items-center justify-content-evenly p-2">
                <button className='button3'>Basic</button>
                <button className='button3 active'>Standard</button>
                <button className='button3'>Premium</button>
            </div>

            <div className="plan-content d-md-none  p-3 d-flex flex-column gap-3">
                <div className="m-0 row ">
                    <div className='col-6 p-0'>
                        <small className="muted">Price</small>
                        <p>$12.99/Month</p>
                    </div>
                    <div className='col-6'>
                        <small className="muted">Free Trial</small>
                        <p>7 Days</p>
                    </div>
                </div>

                <div>
                    <small className="muted">Content</small>
                    <p>Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                </div>

                <div>
                    <small className="muted">Devices</small>
                    <p>Watch on Two device simultaneously</p>
                </div>

                <div className="row">
                    <div className='col-6 p-0'>
                        <small className="muted">Cancel Anytime</small>
                        <p>Yes</p>
                    </div>
                    <div className='col-6'>
                        <small className="muted">HDR</small>
                        <p>Yes</p>
                    </div>
                </div>

                <div className="row m-0">
                    <div className='col-6 p-0'>
                        <small className="muted">Dolby Atmos</small>
                        <p>Yes</p>
                    </div>
                    <div className='col-6'>
                        <small className="muted">Ad - Free</small>
                        <p>Yes</p>
                    </div>
                </div>

                <div className="m-0 row">
                    <div className='col-6 p-0'> 
                        <small className="muted">Offline Viewing</small>
                        <p>Yes, for select titles.</p>
                    </div>
                    <div className='col-6'>
                        <small className="muted">Family Sharing</small>
                        <p>5 family members.</p>
                    </div>
                </div>

            </div>
        

        </div>
    </div>
  )
}

export default Plan