import Canvas from "./canvas";
import Customizer from "./pages/Customizer.jsx";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
      <Toaster />
    </div>
  );
}

export default App;
