import { useApp } from "./useApp";
import { AppContainer } from "./App.styles";
import Pictures from "./components/pictures/Pictures";
import Naviagation from "./components/navgation/Naviagation";

function App() {
  useApp();

  return (
    <AppContainer>
      <Naviagation />
      <Pictures />
    </AppContainer>
  );
}

export default App;
