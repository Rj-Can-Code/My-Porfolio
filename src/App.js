import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Profile } from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      < NavBar />
      < Banner />
      < Skills />
      < Projects />
      < Profile />
      < Footer />
    </div>
  );
}

export default App;
