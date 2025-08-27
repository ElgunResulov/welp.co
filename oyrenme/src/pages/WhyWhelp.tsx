import React from 'react'


const WhyWhelp: React.FC = () => {
    return (
        <div className="WhyWhelp container ">
            <div className="row WhyWhelpTotal">
                <h3 >Why Whelp?</h3>
                
                <div className='Whywhelp-box'>
                    <article className='percent'>68%</article>
                    <article>Automation for Ecommerce at least</article>
                </div>
                <div className='Whywhelp-box'>
                    <article className='percent'>2.7%</article>
                    <article>Increase in usage of WhatsApp</article>
                </div>
                <div className='Whywhelp-box'>
                    <article className='percent'>4M+</article>
                    <article>Conversations have been answered</article>
                </div>
            </div>
        </div>
    )
}

export default WhyWhelp