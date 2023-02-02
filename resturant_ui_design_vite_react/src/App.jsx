import './App.css'
import { Navbar } from './components'
import { Header,Chef,FindUs ,AboutUs} from './container'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Chef/>
      <FindUs />
    </div>
  )
}

export default App
