import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import './data/salam.json'
import Header from './pages/Header'
import Introduction from "./pages/Introduction"
import Streamline from "./pages/Streamline"
import Consolidate from "./pages/Consolidate"
import Analyze from "./pages/Analyze"
import WpIntroduce from "./pages/WpIntroduce"
import Communication from "./pages/Communication"
import DesignUnique from "./pages/DesignUnique"
import WhyWhelp from "./pages/WhyWhelp"
import ExploreIntegrations from "./pages/ExploreIntegrations"
import  Box  from "./pages/Box"
// import Cards from "./components/Cards"


function App() {
  return (
    <div className="whelp-total">
        <Header />
        <Introduction />
        <Streamline />
        <Consolidate />
        <Analyze />
      <div className="pink">
        <WpIntroduce />
      </div>
        <Communication />
        <DesignUnique />
      <div className="black">
        <WhyWhelp  />
      </div>  
      <ExploreIntegrations />
      {/* <Cards /> */}
      <Box/>
      
          

    </div>
  )
}

export default App
