import AppRoutes from "./AppRoutes"
import { EquiposProvider } from "./context/equiposContext"
import { AuthProvider } from "./context/authContext"


function App() {

  return (
    <AuthProvider>
      <EquiposProvider>
        <AppRoutes/>
      </EquiposProvider>
    </AuthProvider>
  )
}

export default App
