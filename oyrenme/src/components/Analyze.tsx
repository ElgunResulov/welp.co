import React from 'react'
import Button from './Button';
    
const Analyze:React.FC = () => {
  return (
    <section className='container'>
        <div className='row'>
            <div className='Analyze-sides d-flex '>
                <div className='Analyze-left col-12 col-md-6  '>
                    <h1  className='Analyze-title '>Analyze Your <br /> Company's <br /> Performance with <br /> Advanced Reporting</h1>
                    <article className='Analyze-article'>Advanced reporting provides insights into your company's performance over any time range, helping you optimize your business operations.</article>
                     <Button /> 
                </div>    
                <div className='Analyze-right  col-12 col-md-6 '>
                    <div className='Analyze-imagebox '>
                        <img className='Analyze-image' src="https://whelp.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright.0833fab0.png&w=3840&q=75" alt="" />
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default Analyze