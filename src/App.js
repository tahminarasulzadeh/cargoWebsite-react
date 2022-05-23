import "./App.css";
import Navbar from "./components/NavBar";
import { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="app">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {!authCtx.isLoggedIn && <Route path="/login" component={Login} />}
        {authCtx.isLoggedIn && (
          <Route path="/user-profile" component={UserProfile} />
        )}
        <Route path="/service" component={Service} />
      </Switch>
    </div>
  );
}

export default App;
