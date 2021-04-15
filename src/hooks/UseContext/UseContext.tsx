import {
  createContext,
  Dispatch,
  Fragment,
  useContext,
  useState,
} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


interface UserData {
  user?: User | null;
  setUser: (x: User | null) => void;
}
export const UserDataContext = createContext<UserData>({ setUser: () => {} });

export default function UseContextPoc() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Fragment>
      <Router>
        <li>
          <Link to="/home">Home</Link>{" "}
        </li>
        <li>
          <Link to="/about">About</Link>{" "}
        </li>

        <UserDataContext.Provider value={{user, setUser}}>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
        </UserDataContext.Provider>
      </Router>
    </Fragment>
  );
}

function Home() {
  const {user} = useContext(UserDataContext);
  return (
    <>
      <h1>Home</h1>
      <p>{JSON.stringify(user)}</p>
    </>
  );
}
function About() {
  const {user, setUser} = useContext(UserDataContext);
  return (
    <>
      <h1>About</h1>
      <p>{user ? JSON.stringify(user) : null} </p>

      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button
          onClick={() =>
            setUser({ name: "chopin", email: "chopin@gmail.com" })
          }
        >
          Login
        </button>
      )}
    </>
  );
}

interface User {
  name: string;
  email: string;
}
