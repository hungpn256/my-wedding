import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { imageFull } from "../../components/Gallery/images";

const Album = () => {
  return (
    <ImageGallery
      items={imageFull}
      lazyLoad
      showThumbnails
      thumbnailPosition={
        window.innerWidth > window.innerHeight ? "left" : "bottom"
      }
      infinite={false}
    />
  );
};

export default Album;
