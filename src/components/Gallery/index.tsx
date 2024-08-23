import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import { images } from "./images";

const slides = images.map(({ original }) => ({
  src: original,
}));

export default function GalleryImage() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number) => setIndex(index);

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
        <div className="row" data-aos="fade-up">
          <div className="col col-xs-12">
            <Gallery
              images={images}
              onClick={handleClick}
              enableImageSelection={false}
              rowHeight={300}
              thumbnailImageComponent={(i) => (
                <img
                  data-aos="flip-left"
                  style={{
                    objectFit: "cover",
                    background: "#000",
                    width: "100%",
                    height: "100%",
                  }}
                  src={i.item.src}
                />
              )}
            />
            <Lightbox
              slides={slides}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              plugins={[Captions, Fullscreen, Zoom]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
