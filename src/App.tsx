import "./App.css";
import { ReactElement } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Calculator from '../src/hooks/useState/UseState'
import UseEffect from "./hooks/UseEffect/UseEffects";
import UseContext from "./hooks/UseContext/UseContext";
function App(): ReactElement {
  return <BrowserRouter>
    <NavBar />
    <Switch >
      <Route exact path='/usestate'>
        <Calculator />
      </Route>
      <Route exact path='/useEffect'>
        <UseEffect />
      </Route>
      <Route exact path='/useContext'>
        <UseContext />
      </Route>
    </Switch>
  </BrowserRouter>
}
function NavBar(): ReactElement {
  return (
    <>
      <ul id="nav">
        <li>
          <Link to="/usestate">UseState</Link>
        </li>
        <li>
        <Link to="/useEffect">UseEffect</Link>
        </li>
        <li>
          <a href="/useContext">UseContext</a>
        </li>
        <li>
          <a href="#">UseRef</a>
        </li>
      </ul>
    </>
  );
}
export default App;
