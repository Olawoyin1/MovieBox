import React, { useState } from 'react'

const FAQ = () => {

    const [open, setOpen] = useState(false)


    const handleFaq = () => {
        setOpen(!open)
    }

  return (
    <div>
        <div className="container2">
            <div className="d-flex align-items-md-center align-items-start flex-column flex-md-row gap-3 justify-content-between">
                <div>
                    <h5>Frequently Asked Questions</h5>
                    <small className="muted">Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</small>
                </div>
                <button className="button1">Ask a Question</button>
            </div>

            <div className="faqs my-4 grid1 row m-0 row-cols-1 row-cols-lg-2">
                <div className="faq-item">
                    <div className="faq-head d-flex align-items-center justify-content-between ">
                        <div className='d-flex align-items-center gap-3'>
                            <div className="num d-flex align-items-center justify-content-center">01</div>
                            <p>Question One</p>
                        </div>
                        <button onClick={handleFaq} className='faq-btn'>+</button>
                    </div>
                    <div className="faq-answer mt-2 mb-3">
                    {
                        open ? (
                            <small className="muted">StreamVibe is a streaming service that allows you to watch movies and shows on demand.</small>
                        ): null
                    }
                    </div>
                </div>
                <div className="faq-item col">
                    <div className="faq-head d-flex align-items-center gap-3">
                        <div className="num d-flex align-items-center justify-content-center">01</div>
                        <p>Question One</p>
                    </div>
                    <div className="faq-answer mt-2 mb-3">
                        <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam vitae adipisci eius nostrum aperiam facilis. Deserunt perspiciatis consectetur voluptas!</small>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-head d-flex align-items-center gap-3">
                        <div className="num d-flex align-items-center justify-content-center">01</div>
                        <p>Question One</p>
                    </div>
                    <div className="faq-answer mt-2 mb-3">
                        <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum totam vitae adipisci eius nostrum aperiam facilis. Deserunt perspiciatis consectetur voluptas!</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ