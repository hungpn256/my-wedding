import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import HomePage from "./pages/Home";

const AppContext = createContext({});
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <AppContext.Provider value={{ loading, setLoading }}>
        <HomePage />
        {loading && <Loading />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
