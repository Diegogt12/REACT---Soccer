import { BrowserRouter, Routes, Route } from "react-router-dom"
import Formulario from "./components/Formulario";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import Plantilla from "./components/Plantilla";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Formulario />} />

                <Route path="/home" element={<Home />} >
                    <Route path=":id_equipo" element={<TeamPage/>}>
                        <Route path="plantilla/:id_plantilla" element={<Plantilla/>}/> 
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes;