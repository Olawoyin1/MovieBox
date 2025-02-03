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
            <table className='my-4'>
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
            <div className="select">
                <button className='button3'>Basic</button>
                <button className='button3'>Standard</button>
                <button className='button3'>Premium</button>
            </div>

            <div className="plan-content">
                
            </div>
        

        </div>
    </div>
  )
}

export default Plan