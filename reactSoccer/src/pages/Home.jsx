import Header from "../components/Header";
import Crest from "../components/Crest";
import { Outlet } from "react-router-dom";
import { useEscudosHooks } from "../hooks/EscudosHook";

const Home = () => {
  const { equipos } = useEscudosHooks();

  return (
    <>
      <Header />
      <Crest />
      <Outlet />
    </>
  );
};

export default Home;