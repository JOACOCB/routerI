import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navegacion from "./components/Navegacion"
import HomePage from "./views/HomePage"
import Contacto from "./views/Contacto"
import HappyCake from "./views/HappyCake"
import Error from "./views/Error"




function App() {
 

  return (
  <BrowserRouter>
  <div>
        <Navegacion></Navegacion>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/happycake" element={<HappyCake></HappyCake>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
          
       
          
        </Routes>




  </div>
  
  
  </BrowserRouter>
  )
}

export default App
