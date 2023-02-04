import './App.css'
import { Navbar } from './components'
import { Header,Chef,FindUs ,AboutUs, Intro,SpecialMenu,Laurels} from './container'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro />
      <Laurels />
      <FindUs />
    </div>
  )
}

export default App
