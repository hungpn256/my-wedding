/* eslint-disable @typescript-eslint/no-explicit-any */
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import audio from "./assets/audio.mp3";
import Loading from "./components/Loading";
const HomePage = lazy(() => import("./pages/Home"));
const Album = lazy(() => import("./pages/Album"));

export const AppContext = createContext<{
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  audioEl?: any;
}>({});
function App() {
  const [loading, setLoading] = useState(true);
  const [audioEl] = useState(new Audio(audio));

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
      element: <Album />,
    },
  ]);

  return (
    <div>
      <AppContext.Provider value={{ loading, setLoading, audioEl }}>
        <Suspense fallback={<Loading />}>{routers}</Suspense>
        {loading && <Loading />}
        <ToastContainer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
