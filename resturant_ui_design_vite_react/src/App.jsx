import './App.css'
import { Navbar } from './components'
import { Header,Chef,FindUs ,AboutUs, Intro,SpecialMenu,Laurels ,Gallery, Footer} from './container'
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
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
