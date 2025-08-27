import React from 'react'

const ExploreIntegrations : React.FC = () => {
  return (
    <section className='container'>
      <div className='row'>
        <div className='ExploreIntegrationsSides d-lg-flex '>
          <div className='ExploreIntegrationsLeft col-12 col-md-6  '>
            <h3 className='ExploreIntegrationsTitle '>Explore Integrations</h3>
            <article className='ExploreIntegrationsArticle'>Our integrations make it easy to work with the applications your teams already love.</article>
          </div>
          <div className='ExploreIntegrationsRight col-12 col-md-6  '>
            <div className='ExploreIntegrationsImagebox '>
              <img className='ExploreIntegrationsImage ' src="./public\images\rightExplore.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default  ExploreIntegrations