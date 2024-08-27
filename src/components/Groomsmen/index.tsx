import { memo } from "react";

const groomsmenData = [
  {
    name: "Trần Đức Minh",
    role: "Phù rể",
    image:
      "https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/0a6cfab9e637b586cec8724825f99d9e.jpeg",
    description:
      "Chàng trai sinh năm 1996 tại Bình Dương, từng là sinh viên Đại học Kinh tế TP. Hồ Chí Minh. Hiện tại, đang làm nhân viên tín dụng ngân hàng.",
  },
  {
    name: "Hoàng Gia Bảo",
    role: "Phù rể",
    image:
      "https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/7411475c6f639d4457ef1ea26ce09ee2.jpeg",
    description:
      "Hòa đồng, xông xáo, nhiệt tình và có trách nhiệm trong công việc. Là chàng trai yêu động vật, thích chơi game, thích ăn cơm nhà và nước uống có ga…",
  },
];

const Groomsmen = () => {
  return (
    <section
      id="groomsmen"
      className="parallax-background bg-color-overlay"
      style={{
        backgroundImage:
          "url('https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/30a82e72a3e877ce778fa5da70d857a1.jpg')",
        backgroundPosition: "center 301px",
      }}
    >
      <div className="container">
        <div className="row" data-aos="fade-out">
          <div className="col-sm-12">
            <h2 className="section-title light">Phù rể</h2>
          </div>
        </div>

        <div className="row center">
          {groomsmenData.map((groom, index) => (
            <div key={index} className="element bmaid-gmen col-sm-6 col-lg-4">
              <div
                className="image"
                data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
              >
                <img
                  src={groom.image}
                  alt={groom.name}
                  width="434"
                  height="434"
                />
                <div className="hover-info neela-style">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <div className="content center">
                    <h3>
                      {groom.name}
                      <small>{groom.role}</small>
                    </h3>
                    <p>
                      {groom.description}
                      <a
                        className="button-see"
                        data-src={groom.image}
                        data-content={groom.description}
                        style={{ fontSize: "14px", cursor: "pointer" }}
                      >
                        Xem thêm<i className="bi bi-arrow-down-short"></i>
                      </a>
                    </p>
                    <ul className="sn-icons">{/* Icons if needed */}</ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const GroomsmenMemo = memo(Groomsmen);
export default GroomsmenMemo;
