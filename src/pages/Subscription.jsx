import React from 'react'
import Pricing from '../components/Pricing'
import Plan from '../components/Plan'
import Trial from '../components/Trial'

const Subscription = () => {
  return (
    <div>
        <div className="contain">
            <Pricing />
            <Plan />
            <Trial />
        </div>
    </div>
  )
}

export default Subscription