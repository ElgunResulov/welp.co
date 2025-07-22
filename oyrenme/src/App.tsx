import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import Introduction from "./components/Introduction"
import Streamline from "./components/Streamline"
import Consolidate from "./components/Consolidate"
import Analyze from "./components/Analyze"


function App() {
  return (
    <>
      <Header/>
      <Introduction/>
      <Streamline/>
      <Consolidate/>
      <Analyze/>
    </>
  )
}

export default App
