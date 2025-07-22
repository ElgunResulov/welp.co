import React from 'react'

const Introduction:React.FC = () => {
  return (
    <section className='container'>
        <div className='row'>
            <div className='Introduction-sides d-flex '>
                <div className='Introduction-left col-12 col-md-6  '>
                    <h1  className='Introduction-title '>Elevate Your Customer Support with Our Omnichannel Solution</h1>
                    <article className='introduction-article'>Connect with customers on Live Chat, SMS, WhatsApp, E-mail, and Social Media for seamless, personalized service. Boost efficiency with our unified customer view and AI-powered automations.</article>
                    <div className='Introduction-input-button'>
                        <input type="text" className='Introduction-input ' />
                        <button className='btn Introduction-button btn-dark  '>Get Started</button>
                    </div>
                </div>    
                <div className='Introduction-right  col-12 col-md-6 '>
                    <div className='Introduction-imagebox '>
                        <img className='I-background  ' src="https://whelp.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue-bg.bef5b55c.png&w=2048&q=75 " alt="" />
                        <img className='I-image' src="https://whelp.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmodel.6a793c11.png&w=2048&q=75" alt="" />
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default Introduction