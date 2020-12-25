import logo from "./logo.svg";
import "./App.css";
import "./sass/main.scss";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { MainContainer } from "./components/utils";
import Signup from "./components/auth/signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function App(props) {
  console.log("PROPS");
  console.log(props);
  return (
    <div className="App">
      <Navbar />

      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={Signup} />
        </Switch>
      </MainContainer>
    </div>
  );
}

export default withRouter(App);
