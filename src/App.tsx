import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import HomePage from "./pages/Home";

export const AppContext = createContext<{
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}>({});
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-out-back" });

    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
