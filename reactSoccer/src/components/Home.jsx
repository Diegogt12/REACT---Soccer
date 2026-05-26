import { useContext } from "react";
import Header from "./Header"
import { useEffect } from "react";
import { EquiposContext } from "../context/equiposContext"
import Crest from "./Crest";
import { Outlet } from "react-router-dom";

const Home = () => {

    const { cargarEquiposHook } = useContext(EquiposContext);

    useEffect(() => {
        cargarEquiposHook()
    }, [])

    return (
        <>
            <Header />
            <Crest />
            <Outlet/>
        </>
    )
}

export default Home