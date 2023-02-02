import './App.css'
import { Navbar } from './components'
import { Header,Chef,FindUs } from './container'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Chef/>
      <FindUs />
    </div>
  )
}

export default App
