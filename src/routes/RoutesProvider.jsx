import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Acerca from "../pages/Acerca";

const RoutesProvider = () => {
  Routes
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/Sobre" element={<Acerca />}/>
      </Route>
    </Routes>
  )
}

export default RoutesProvider;