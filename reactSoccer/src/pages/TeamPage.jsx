import Detalles from "../components/Detalles";
import { Outlet } from "react-router-dom";

const TeamPage = () => {
  return (
    <>
      <Detalles />
      <Outlet />
    </>
  );
};

export default TeamPage;
