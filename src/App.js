import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Footer from "./Layout/Footer/Footer.jsx";
import Team from "./Pages/Team/Team.jsx";
import Roadmap from "./Pages/Roadmap/Roadmap.jsx";
import Hero from "./Pages/Hero/Hero.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Team />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
