import React from 'react'

const WpIntroduce: React.FC = () => {
    return (
        <div className="WpIntroduce container">
            <div className="row">
                <div className="col-md-12">
                    <h3>“WhatsApp blended with Whelp interface is the ideal <br /> tool to reach your audience and promote your product <br /> and service.”</h3>
                    <img className='WpIntroduceImg' src="/images/seymur.png" alt="" />
                    <div className="WpIntroduceImgUnder">
                        <article className='WpIntroduceName'>Seymur Rasulov</article>
                        <article className='Co-founder'>Co-founder at Whelp, Inc</article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WpIntroduce