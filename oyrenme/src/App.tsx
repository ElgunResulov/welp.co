import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import Introduction from "./components/Introduction"
import Streamline from "./components/Streamline"
import Consolidate from "./components/Consolidate"
import Analyze from "./components/Analyze"
import WpIntroduce from "./components/WpIntroduce"
import Communication from "./components/Communication"

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


    </div>
  )
}

export default App
