import CanvasModal from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="app transition-all ease-in">
      <Home />
      <CanvasModal />
      <Customizer />
      <Toaster />
    </div>
  );
}

export default App;
