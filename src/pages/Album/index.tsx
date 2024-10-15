import { useContext, useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { AppContext } from "../../App";
import { imageFull } from "../../components/Gallery/images";

const Album = () => {
  const { audioEl } = useContext(AppContext);
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    localStorage.setItem("viewAlbum", "true");
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ImageGallery
      items={imageFull}
      lazyLoad
      showThumbnails
      thumbnailPosition={isPortrait ? "top" : "left"}
      infinite={false}
      onPlay={() => {
        audioEl.play();
      }}
      onPause={() => {
        audioEl.pause();
      }}
    />
  );
};

export default Album;
