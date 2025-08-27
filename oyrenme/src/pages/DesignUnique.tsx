import React from 'react'
import Button from '../components/Button';

const DesignUnique: React.FC = () => {
    return (
        <section className='container'>
            <div className='row'>
                <div className='DesignUnique-sides d-lg-flex '>
                    <div className='DesignUnique-left col-12 col-md-6  '>
                        <h3 className='DesignUnique-title '>Design Unique <br /> Chatbots with Drag <br /> and Drop</h3>
                        <article className='DesignUnique-article'>The chatbot builder on this platform makes it easy for you to design and deploy chatbots that can provide your customers with 24/7 service and quick responses to their inquiries and concerns. </article>
                        <Button />
                    </div>
                    <div className='DesignUnique-right  col-12 col-md-6  '>
                        <div className='DesignUnique-imagebox '>
                            <img className='DesignUnique-image' src="../public/images/right.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}

export default DesignUnique