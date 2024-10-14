import { memo, useMemo, useState } from "react";
import { Gallery } from "react-grid-gallery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import { images } from "./images";

const slides = images.map(({ original }) => ({
  src: original,
}));

function GalleryImage() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number) => setIndex(index);

  const GalleryMemo = useMemo(() => {
    return (
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={300}
        thumbnailImageComponent={(i) => (
          <LazyLoadImage
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            className="lazy-load-image"
            src={i.item.src}
            effect="blur"
          />
        )}
      />
    );
  }, []);

  const LightBoxMemo = useMemo(() => {
    return (
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Fullscreen, Zoom]}
      />
    );
  }, [index]);

  console.log("load");

  return (
    <section id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-sm-12" data-aos="fade-up">
            <h1 className="section-title">Album Hình Cưới</h1>
            <div className="center m-0 mt-2 mb-2">
              <div
                onClick={() => handleClick(0)}
                className="btn btn-primary px-2"
                style={{ minWidth: "240px", maxWidth: "240px" }}
              >
                Xem album
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            {GalleryMemo}
            {LightBoxMemo}
          </div>
        </div>
      </div>
    </section>
  );
}

const GalleryImageMemo = memo(GalleryImage);
export default GalleryImageMemo;
