import { AppContextProvider } from "./Context/ContextApp";
import { AppRoutes } from "./Routes";
import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <AppContextProvider>
      <AppRoutes />
      <GlobalStyle />
    </AppContextProvider>
  );
}

export default App;
