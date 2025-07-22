import React from 'react'

    
const Streamline:React.FC = () => {
  return (
    <section className='container'>
        <div className='row'>
            <div className='Streamline-sides d-flex '>
                <div className='Streamline-left col-12 col-md-6  '>
                    <h1  className='Streamline-title '>Streamline Your <br /> Workflow with a CRM Solution</h1>
                    <article className='Streamline-article'>Our platform simplifies the process of managing <br /> and responding to customer inquiries and concerns <br /> by consolidating all of their interactions and data in <br /> one place.</article>
                    <button className='Streamline-button'><a href="">Learn more </a></button>
                </div>    
                <div className='Streamline-right  col-12 col-md-6 '>
                    <div className='Streamline-imagebox '>
                        <img className='Streamline-image' src="https://whelp.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright.7cd02026.png&w=3840&q=75" alt="" />
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default Streamline