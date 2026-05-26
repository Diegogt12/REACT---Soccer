import { BrowserRouter, Routes, Route } from "react-router-dom"
import Formulario from "./components/Formulario";
import Home from "./components/Home";
import Detalles from "./components/Detalles";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Formulario />} />

                <Route path="/home" element={<Home />} >
                     <Route path=":id_equipo" element={<Detalles/>}>
                        {/* <Route path="plantilla/:id_equipo" element={<Plantilla/>}/> */}
                    </Route> 
                </Route> 

            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes;