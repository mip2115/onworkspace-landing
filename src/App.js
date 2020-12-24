import logo from "./logo.svg";
import "./App.css";
import "./sass/main.scss";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { MainContainer } from "./components/utils";
import Signup from "./components/auth/signup";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer>
        {/* <Home /> */}
        <Signup />
      </MainContainer>
    </div>
  );
}

export default App;
