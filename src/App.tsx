import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, lazy, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
const HomePage = lazy(() => import("./pages/Home"));
const AlbumPage = lazy(() => import("./pages/Album"));

export const AppContext = createContext<{
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}>({});
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-out-back", once: true });

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const routers = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/album",
      element: <AlbumPage />,
    },
  ]);

  return (
    <div>
      <AppContext.Provider value={{ loading, setLoading }}>
        {routers}
        {loading && <Loading />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
