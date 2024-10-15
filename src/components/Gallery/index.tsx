import { memo, useMemo, useState } from "react";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import { images } from "./images";

const slides = images.map(({ original }) => ({
  src: original,
}));

function GalleryImage() {
  const [index, setIndex] = useState(-1);

  const GalleryMemo = useMemo(() => {
    return (
      <div className="row g-5 mt-5">
        {images.map((item, index) => {
          return (
            <div className="col-lg-6" onClick={() => setIndex(index)}>
              <LazyLoadImage
                style={{
                  cursor: "pointer",
                }}
                className="lazy-load-image shadow-lg rounded"
                src={item.src}
                effect="blur"
              />
            </div>
          );
        })}
      </div>
    );
  }, []);

  const LightBoxMemo = useMemo(() => {
    return (
      <LazyLoadComponent>
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Captions, Fullscreen, Zoom]}
        />
      </LazyLoadComponent>
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
              <Link
                to="/album"
                className="btn btn-primary px-2"
                style={{ minWidth: "240px", maxWidth: "240px" }}
              >
                Xem album
              </Link>
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
