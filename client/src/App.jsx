import Canvas from "./canvas"
import Customizer from './pages/Customizer.jsx'
import Home from "./pages/home"

function App() {

  return (
    <div className="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customizer/>
    </div>
  )
}

export default App
