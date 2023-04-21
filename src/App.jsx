import CanvasModal from "./canvas/index";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="app transition-all ease-in">
      <ToastContainer
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      <Home />
      <CanvasModal />
      <Customizer />
    </div>
  );
}

export default App;
