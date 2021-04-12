import "./App.css";
import { ReactElement } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Calculator from '../src/hooks/useState/UseState'
function App(): ReactElement {
  return <BrowserRouter>
    <NavBar />
    <Switch >
      <Route exact path='/usestate'>
        <Calculator />
      </Route>
    </Switch>
  </BrowserRouter>
}
function NavBar(): ReactElement {
  return (
    <div>
      <ul id="nav">
        <li>
          <Link to="/usestate">UseState</Link>
        </li>
        <li>
          <a href="#">UseEffect</a>
        </li>
        <li>
          <a href="#">UseContext</a>
        </li>
        <li>
          <a href="#">UseRef</a>
        </li>
      </ul>
    </div>
  );
}
export default App;
