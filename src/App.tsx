import { AppContextProvider } from "./Context/ContextApp";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
}

export default App;
