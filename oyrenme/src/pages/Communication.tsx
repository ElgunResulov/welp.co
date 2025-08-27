import React from 'react'
import Button from '../components/Button'

const Communication:React.FC = () => {
  return (
    <section className='container'>
        <div className='row'>
            <div className='Communication-sides d-flex '>
                <div className='Communication-left col-12 col-md-6  '>
                    <img className='Communication-image' src="\images\communication.png" alt="" />
                </div>    
                
                <div className='Communication-right  col-12 col-md-6 '>
                    <h3>Customize Your Communication Efforts</h3>
                    <article>Whelp allows you to easily customize and automate <br /> your communication campaigns, sending bulk <br /> messages via WhatsApp, Telegram, Email, and <br /> Facebook Messenger.</article>
                    <Button />
                </div>    
            </div>
        </div>
    </section>
    
)
}

export default Communication