import CanvasModal from "./canvas/index";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="app transition-all ease-in">
      <Home />
      <CanvasModal />
      <Customizer />
      <ToastContainer
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  );
}

export default App;
