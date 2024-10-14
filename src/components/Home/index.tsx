import { memo } from "react";
import NameImage from "../../assets/name.svg";
import Button from "../Button";

const Home = () => {
  return (
    <section
      id="hero"
      className="bg-slideshow section-divider-bottom-1 zs-enabled"
      style={{ minHeight: "917px" }}
    >
      <div className="zs-slideshow bg-pain">
        <div className="zs-slides">
          <img
            className="zs-slide zs-slide-0 active"
            style={{
              zIndex: 2,
              backgroundPosition: "20% 20%",
              objectFit: "cover",
              objectPosition: "20% 20%",
            }}
            src="compressor/2T9A6560.jpg"
          ></img>
        </div>
      </div>
      <div className="container" style={{ zIndex: 2, marginTop: "96.0705px" }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="hero-wrapper v-center" data-aos="zoom-out-down">
              <h2 className="text-center">SAVE THE DATE</h2>
              <h1 className="hero-title light text-center">
                <img
                  style={{
                    width: 800,
                    objectFit: "cover",
                  }}
                  src={NameImage}
                  alt="Name"
                />
              </h1>
              <div className="hero-subtitle light animate-fade animation-fade text-center">
                10 Tháng 10 2024 (âm lịch)
              </div>
              <div
                data-animation-direction="fade"
                className="animate-fade animation-fade text-center"
              >
                <Button data-aos="zoom-out-up"> Gửi lời chúc</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeMemo = memo(Home);
export default HomeMemo;
