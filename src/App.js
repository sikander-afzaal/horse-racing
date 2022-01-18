import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Team from "./Pages/Team/Team.jsx";
import Roadmap from "./Pages/Roadmap/Roadmap.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Team />
      <Roadmap />
    </div>
  );
}

export default App;
