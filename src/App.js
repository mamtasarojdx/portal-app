import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./Components/Account/CreateAccount";
import Retailer from "./Components/Retailer/Retailer";
import BrandPopPup from "./Components/Brand_Popup/BrandPopPup";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={< CreateAccount/>}>  </Route>
        <Route path="/retailer" element={< Retailer/>}>  </Route>
        <Route path="/brand" element={< BrandPopPup/>}>  </Route>
      
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
