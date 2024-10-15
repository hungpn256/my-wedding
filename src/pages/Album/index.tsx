import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { imageFull } from "../../components/Gallery/images";

const Album = () => {
  console.log(123);

  return (
    <ImageGallery
      items={imageFull}
      lazyLoad
      showThumbnails
      thumbnailPosition="left"
      infinite={false}
    />
  );
};

export default Album;
