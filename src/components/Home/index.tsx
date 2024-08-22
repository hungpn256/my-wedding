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
          <div
            className="zs-slide zs-slide-0 active"
            style={{
              backgroundImage: `url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/a33b08a813ee02e7a4b7d72ce05d9e93.jpg")`,
              zIndex: 2,
            }}
          ></div>
        </div>
      </div>
      <div className="container" style={{ zIndex: 2, marginTop: "96.0705px" }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="hero-wrapper v-center">
              <h2
                data-animation-direction="fade"
                data-animation-delay="600"
                className="animate-fade animation-fade text-center"
              >
                LỄ VU QUY
              </h2>
              <h1 className="hero-title light text-center">
                <span
                  className="d-block d-sm-inline animate-from-right animation-from-right"
                  data-animation-direction="from-right"
                  data-animation-delay="300"
                >
                  Năng Hưng
                </span>
                <small
                  className="d-block d-sm-inline animate-from-top animation-from-top"
                  data-animation-direction="from-top"
                  data-animation-delay="300"
                >
                  &amp;
                </small>
                <span
                  className="d-block d-sm-inline animate-from-left animation-from-left"
                  data-animation-direction="from-left"
                  data-animation-delay="300"
                >
                  Thu Hà
                </span>
              </h1>
              <div
                className="hero-subtitle light animate-fade animation-fade text-center"
                data-animation-direction="fade"
                data-animation-delay="1000"
              >
                10 Tháng 10 2024 (âm lịch)
              </div>
              <div
                data-animation-direction="fade"
                data-animation-delay="1000"
                className="animate-fade animation-fade text-center"
              >
                <Button> Gửi lời chúc</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
