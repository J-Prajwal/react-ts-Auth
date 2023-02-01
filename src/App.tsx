import { useState } from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(localStorage.getItem("token")? true: false);

  const handleAuth = (): void => {
    setIsAuth(!isAuth);
  }

  if (isAuth) {
    return <Homepage />;
  } else {
    return <Login handleAuth={handleAuth} />;
  }
}

export default App;
