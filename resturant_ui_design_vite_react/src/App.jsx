import './App.css'
import { Navbar } from './components'
import { Header,Chef,FindUs ,AboutUs, Intro} from './container'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Chef/>
      <Intro />
      <FindUs />
    </div>
  )
}

export default App
