import React from 'react'
import Button from './Button'   ;

const Consolidate:React.FC = () => {
  return (
    <section className='container'>
        <div className='row'>
            <div className='Consolidate-sides d-flex '>
                <div className='Consolidate-left col-12 col-md-6  '>
                    <img className='Consolidate-image' src="\images\left.png" alt="" />
                </div>    
                
                <div className='Consolidate-right  col-12 col-md-6 '>
                    <h2>Consolidate Your <br /> Customer <br /> Conversations in One <br /> Inbox</h2>
                    <article>A single inbox allows you to combine all of your <br /> phone, email, chat, and messaging app <br /> conversations in one location, improving your <br /> efficiency and customer satisfaction.</article>
                    <Button />
                </div>    
            </div>
        </div>
    </section>

  )
}

export default Consolidate