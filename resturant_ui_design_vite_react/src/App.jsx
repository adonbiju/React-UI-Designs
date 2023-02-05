import './App.css'
import { Navbar } from './components'
import { Header,Chef,FindUs ,AboutUs, Intro,SpecialMenu,Laurels ,Gallery, Footer,Newsletter} from './container'
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
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default App
