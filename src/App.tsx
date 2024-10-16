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
import ModalOrderSong from "./components/ModalOrderSong";
const HomePage = lazy(() => import("./pages/Home"));
const Album = lazy(() => import("./pages/Album"));
const VerifyRSVP = lazy(() => import("./pages/VerifyRSVP"));

export const AppContext = createContext<{
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  audioEl?: any;
  setDataOrderSong?: React.Dispatch<
    React.SetStateAction<{
      name: string;
      youtubeUrl: string;
      forGroom: boolean;
      dataYoutube: any;
    }>
  >;
  orderSong?: {
    name: string;
    youtubeUrl: string;
    forGroom: boolean;
    dataYoutube: any;
  };
}>({});
function App() {
  const [loading, setLoading] = useState(true);
  const [orderSong, setDataOrderSong] = useState({
    name: "",
    youtubeUrl: "",
    forGroom: true,
    dataYoutube: undefined,
  });
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
    {
      path: "/verify-rsvp",
      element: <VerifyRSVP />,
    },
  ]);

  return (
    <div>
      <AppContext.Provider
        value={{ loading, setLoading, audioEl, setDataOrderSong, orderSong }}
      >
        <Suspense fallback={<Loading />}>{routers}</Suspense>

        {orderSong.youtubeUrl && <ModalOrderSong />}
        {loading && <Loading />}
        <ToastContainer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
