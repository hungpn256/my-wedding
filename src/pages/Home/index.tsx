import { useEffect, useState } from "react";
import audio from "../../assets/audio.mp3";
import Heart from "../../assets/heart.svg";
import Donate from "../../components/Donate";
import Footer from "../../components/Footer";
import GalleryImage from "../../components/Gallery";
import Groomsmen from "../../components/Groomsmen";
import Header from "../../components/Header";
import HeartFalling from "../../components/HeartFalling";
import Home from "../../components/Home";
import Invitation from "../../components/Invitation";
import RSVP from "../../components/RSVP";
import Testimonials from "../../components/Testimonials";

function HomePage() {
  const [audioEl] = useState(new Audio(audio));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }, [isPlaying, audioEl]);

  const playPause = () => {
    setIsPlaying(!isPlaying);
    // Logic để phát hoặc tạm dừng nhạc sẽ được thêm vào đây
  };

  return (
    <>
      <HeartFalling />
      <Header />
      <Home />
      <section id="couple">
        <div className="container">
          <div className="row about-elems-wrapper">
            <div
              className="element col-md-6 col-xl-4 offset-xl-2"
              data-aos="fade-up-right"
            >
              <div className="image">
                <img
                  src="https://cdn.biihappy.com/ziiweb/default/website/3b48bc6125ce6d186297a3e90a11085e.jpeg"
                  alt=""
                  width="600"
                  height="714"
                />
                <div className="hover-info neela-style">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <div className="content">
                    <h3>
                      Năng Hưng<small>Chú rể</small>
                    </h3>
                    <p>
                      Là một lập trình viên hiện đang công tác tại Rikkeisoft ở
                      Hà Nội. Là một người thông minh và có tư duy sáng tạo. Đặc
                      biệt, anh có tài năng ca hát
                      <a
                        className="button-see"
                        data-src="https://cdn.biihappy.com/ziiweb/default/website/3b48bc6125ce6d186297a3e90a11085e.jpeg"
                        data-content="Là một lập trình viên hiện đang công tác tại Rikkeisoft ở Hà Nội. Là một người thông minh và có tư duy sáng tạo. Đặc biệt, anh có tài năng ca hát, với giọng hát cuốn hút và tình cảm. Bên cạnh công việc và đam mê, anh luôn dành tình yêu và sự quan tâm đặc biệt đến gia đình, coi đó là động lực lớn nhất trong cuộc sống."
                        data-instagram="https://instagram.com"
                        data-twitter="https://twitter.com"
                        data-facebook="https://facebook.com"
                        data-name="Hoàng Kiến Văn"
                        style={{ fontSize: "14px", cursor: "pointer" }}
                      >
                        Xem thêm<i className="bi bi-arrow-down-short"></i>
                      </a>
                    </p>
                    <ul className="sn-icons">
                      <li>
                        <a href="https://instagram.com">
                          <i className="fab fa-instagram-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com">
                          <i className="fab fa-twitter-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://facebook.com">
                          <i className="fab fa-facebook-square"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="divider-about-us animate-fade animation-fade flip"
              data-aos="fade-up"
            >
              <img src={Heart} />
            </div>

            <div className="element col-md-6 col-xl-4 " data-aos="fade-up-left">
              <div className="image flip">
                <img
                  src="https://cdn.biihappy.com/ziiweb/default/website/59b631f29bfb9f7cd20437d27ddbe4db.jpeg"
                  alt=""
                  width="600"
                  height="714"
                />
                <div className="hover-info neela-style">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <div className="content">
                    <h3>
                      Thu Hà<small>Cô dâu</small>
                    </h3>
                    <p>
                      Cô gái đến từ Mê Linh, hiện đang làm việc và sinh sống tại
                      Hà Nội. Với chiều cao 1m50, cô mang một nét đáng yêu dễ
                      thương khiến ai gặp cũng yêu mến.
                      <a
                        className="button-see"
                        data-src="https://cdn.biihappy.com/ziiweb/default/website/59b631f29bfb9f7cd20437d27ddbe4db.jpeg"
                        data-content="Cô dâu đến từ Mê Linh, hiện đang làm việc và sinh sống tại Hà Nội. Với chiều cao 1m50, cô mang một nét đáng yêu dễ thương khiến ai gặp cũng yêu mến. Là một người hay cười nhưng lại sống nội tâm, thích trồng cây và yêu thiên nhiên. Ngoài ra còn có niềm đam mê với nấu ăn và thường dành thời gian thử nghiệm những món ăn mới."
                        data-instagram="https://instagram.com"
                        data-twitter="https://twitter.com"
                        data-facebook="https://facebook.com"
                        data-name="Ngô Việt Hoài"
                        style={{ fontSize: "14px", cursor: "pointer" }}
                      >
                        Xem thêm<i className="bi bi-arrow-down-short"></i>
                      </a>
                    </p>
                    <ul className="sn-icons">
                      <li>
                        <a href="https://instagram.com">
                          <i className="fab fa-instagram-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com">
                          <i className="fab fa-twitter-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://facebook.com">
                          <i className="fab fa-facebook-square"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="about-us-desc col-lg-8 offset-lg-2 animate-from-bottom animation-from-bottom"
              data-aos="flip-right"
            >
              <h3>We are Getting Married</h3>
              <p>
                Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt
                như đám cưới của chúng tôi. Chúng tôi muốn gửi đến bạn những lời
                cảm ơn sâu sắc nhất và để bạn biết chúng tôi rất hạnh phúc khi
                thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng
                những lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!
              </p>
              <p className="groom-bride-signature">
                <span>Năng Hưng</span> &amp; <span>Thu Hà</span>
              </p>
              <div className="parent-info-group">
                <div className="parent-infos">
                  <div className="parent-info">
                    <span className="parent-title">Con ông:</span>
                    <span className="parent-name">Phạm Năng Ngà</span>
                  </div>
                  <div className="parent-info">
                    <span className="parent-title">Con bà:</span>
                    <span className="parent-name">Nguyễn Thị Oanh</span>
                  </div>
                </div>

                <div className="parent-infos">
                  <div className="parent-info">
                    <span className="parent-title">Con ông:</span>
                    <span className="parent-name">Đỗ Viết Đoàn</span>
                  </div>
                  <div className="parent-info">
                    <span className="parent-title">Con bà:</span>
                    <span className="parent-name">Phùng Thị Tâm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="our-story-title"
        className="parallax-background bg-color-overlay section-divider-bottom-2 padding-divider-top"
        style={{
          backgroundImage: `url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/d22ce318c91e96e35328d63da2364702.jpg")`,
          backgroundPosition: "center 118px",
        }}
      >
        <div className="section-divider-top-1 off-section"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="section-title light">Chuyện tình yêu</h1>
            </div>
          </div>
        </div>
      </section>
      <section id="story">
        <div className="container">
          <div className="row" data-aos="zoom-in-up">
            <div className="col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <div className="timeline">
                <div className="year animate-from-top animation-from-top">
                  <span className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    October 20 2020
                  </span>
                </div>
                <div className="gallery-container" data-aos="fade-right">
                  <div className="timeline-gallery-wrapper">
                    <div className="timeline-gallery-del">
                      <div className="item text-center">
                        <img
                          src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/0f99c255f7aa7714d366ebde51c86d53.jpeg"
                          alt="Bạn có tin vào tình yêu mai mối không?"
                          className="w-100 h-auto"
                          style={{ maxWidth: "500px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="description-wrapper">
                    <div className="description">
                      <div className="neela-style">
                        <span className="h-lines"></span>
                        <span className="v-lines"></span>
                        <h4>Bạn có tin vào tình yêu mai mối không?</h4>
                        <p>
                          Tôi đã từng không tin vào tình yêu do mai mối. Trong
                          suy nghĩ của tôi khi ấy, gặp nhau chỉ để kết bạn thôi,
                          làm sao có thể nảy sinh tình cảm được? Ngày đó, vì
                          nghe lời con bạn thân thời đại học, tôi cũng thử gặp
                          gỡ, trò chuyện và rồi trở thành bạn bè. Chúng tôi từng
                          cùng nhau đăng ký tín chỉ, cùng học, cùng làm bài tập
                          lớn, chẳng hề nghĩ rằng cuộc đời sẽ thay đổi. Và rồi 4
                          năm sau người ấy lại là bạn đời của mình.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="year animate-from-top animation-from-top"
                  data-aos="zoom-in-up"
                >
                  <span className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    November 31 2020
                  </span>
                </div>
                <div className="gallery-container" data-aos="fade-left">
                  <div className="timeline-gallery-wrapper animate-from-left animation-from-left">
                    <div className="timeline-gallery-del">
                      <div className="item text-center">
                        <img
                          src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/be48dcf2522cd4ecfa7dab2dd4ebd3f9.jpeg"
                          alt="Lời tỏ tình dễ thương^^"
                          className="w-100 h-auto"
                          style={{ maxWidth: "500px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="description-wrapper animate-from-bottom animation-from-bottom"
                    data-animation-direction="from-bottom"
                    data-animation-delay="250"
                  >
                    <div className="description">
                      <div className="neela-style">
                        <span className="h-lines"></span>
                        <span className="v-lines"></span>
                        <h4>Lời tỏ tình dễ thương^^</h4>
                        <p>
                          Vào một ngày đẹp trời, anh rủ tôi đi ăn và hóng gió.
                          Khoảnh khắc ấy vẫn in sâu trong tâm trí tôi, bên cạnh
                          cây cô đơn ở Hồ Tây, bầu trời đêm lấp lánh những đám
                          mây sáng, tạo nên một khung cảnh tuyệt đẹp. Anh nhẹ
                          nhàng ôm tôi từ phía sau, nắm lấy bàn tay tôi rồi khẽ
                          thì thầm bên tai: "Mình chuyển từ bạn thành người yêu
                          nhé?"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="year animate-from-top animation-from-top"
                  data-aos="zoom-in-up"
                >
                  <span className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    April 01 2024
                  </span>
                </div>
                <div className="gallery-container" data-aos="fade-right">
                  <div
                    className="timeline-gallery-wrapper animate-from-left animation-from-left"
                    data-animation-direction="from-left"
                    data-animation-delay="250"
                  >
                    <div className="timeline-gallery-del">
                      <div className="item text-center">
                        <img
                          src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/d2d08234dd0ece24828f396fa243a1ec.jpeg"
                          alt="Phút giây cầu hôn"
                          className="w-100 h-auto"
                          style={{ maxWidth: "500px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="description-wrapper animate-from-bottom animation-from-bottom"
                    data-animation-direction="from-bottom"
                    data-animation-delay="250"
                  >
                    <div className="description">
                      <div className="neela-style">
                        <span className="h-lines"></span>
                        <span className="v-lines"></span>
                        <h4>Phút giây cầu hôn</h4>
                        <p>
                          Gần 4 năm bên nhau không phải là quãng thời gian quá
                          dài, nhưng đủ cho chúng ta nhận ra được rất nhiều
                          điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt
                          qua những khó khăn trong cuộc sống. Chúng ta từ 2 con
                          người xa lạ mà bước vào cuộc đời nhau. Và giờ đây
                          chúng ta tiếp tục cùng nhau sang trang mới. Giây phút
                          anh ngỏ lời “Làm vợ anh nhé!”, em đã nguyện ý đời này,
                          đi đâu cũng được, miễn là cùng anh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="year" data-aos="zoom-in-up">
                  <span className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    November 10 2024
                  </span>
                </div>
                <div className="gallery-container" data-aos="fade-left">
                  <div className="timeline-gallery-wrapper ">
                    <div className="timeline-gallery-del">
                      <div className="item text-center">
                        <img
                          src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/d37c077f9ad6b076bc531b2d6ba44498.jpeg"
                          alt="Ngày lễ đính hôn"
                          className="w-100 h-auto"
                          style={{ maxWidth: "500px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="description-wrapper">
                    <div className="description">
                      <div className="neela-style">
                        <span className="h-lines"></span>
                        <span className="v-lines"></span>
                        <h4>Ngày lễ đính hôn</h4>
                        <p>
                          “Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời
                          yêu thương. Ngày tình về chung đôi...” Sau bao nhiêu
                          chờ đợi, cuối cùng ngày vui của chúng ta cũng tới rồi.
                          Cảm ơn vì mình đã luôn là một phần trong cuộc sống của
                          nhau. Em và anh không chỉ là người yêu mà chúng ta còn
                          là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và
                          sau này sẽ là mẹ của các con anh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline_footer">
                <div>
                  <i className="icon-diamond-ring"></i>
                </div>
                <div
                  className="punchline animate-from-bottom animation-from-bottom"
                  data-aos="fade-up"
                >
                  <small>This is where our FOREVER BEGINS!</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Invitation />
      <GalleryImage />
      <section
        id="video"
        className="parallax-background bg-color-overlay padding-divider-top"
        style={{
          backgroundImage:
            'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/d4f33748bf87fde12d34aa8146e57b4c.jpg")',
          backgroundPosition: "center -134px",
        }}
      >
        <div className="section-divider-top-1 off-section"></div>
        <div className="container" data-aos="fade-right">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="section-title light">
                Xem video cưới của chúng tôi!
              </h1>
            </div>
          </div>

          <div
            className="invite neela-style animate-from-left animation-from-left"
            data-animation-direction="from-left"
            data-animation-delay="100"
          >
            <span className="h-lines"></span>
            <span className="v-lines"></span>
            <div className="ratio ratio-16x9">
              <iframe
                className="border border-5 border-white w-100 h-100"
                style={{
                  borderWidth: "10px !important",
                  width: "1136px",
                  height: "643.844px",
                }}
                src="https://www.youtube.com/embed/lGUdD29BDMg"
                allowFullScreen
                data-aspectratio="0.559"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section
        id="giftregistry"
        className="parallax-background section-bg-color"
        style={{
          padding: "135px 0px",
          backgroundImage:
            'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/f948a8ba806986c08dd4ce1d6e9f8066.jpg")',
          backgroundPosition: "center",
        }}
      >
        <div className="section-divider-top-4 off-section"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xl-6 events-boxs py-5">
              <h2
                className="section-title-lg desc text-white"
                data-aos="fade-up"
              >
                Sự Kiện Cưới
              </h2>
              <div
                className="section-desc mb-5 px-5 text-center"
                data-aos="fade-up"
              >
                Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và
                sát cánh hơn trong những ngày tồi tệ.
              </div>
              <ul className="wedding-gifts">
                <li
                  data-aos="flip-up"
                  className="animate-from-bottom animation-from-bottom"
                >
                  <div className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    <div className="d-flex align-items-center event-item-content">
                      <img
                        src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/45dfd859dd184042e2a6adaa320ac64b.jpeg"
                        alt="LỄ CƯỚI NHÀ NỮ"
                        width="100"
                        height="100"
                        className="d-inline-block rounded-circle me-0 mb-4 me-lg-3 mb-lg-0"
                      />
                      <div className="d-inline-block">
                        <h3 className="w-100">LỄ CƯỚI NHÀ NỮ</h3>
                        <div className="dresscode-colors-wrap">
                          <div className="dresscode-colors-event">
                            <i className="fa fa-user-tie"></i>
                            <span className="tooltip-dresscode">
                              Dress Code:{" "}
                            </span>
                            <div
                              className="dresscode-colors-item"
                              style={{ background: "#eda2b6" }}
                            ></div>
                            <div
                              className="dresscode-colors-item"
                              style={{ background: "#ffffff" }}
                            ></div>
                            <div
                              className="dresscode-colors-item"
                              style={{ background: "#623262" }}
                            ></div>
                          </div>
                        </div>
                        <p className="w-100 mb-2 mt-2">
                          <i className="fa fa-clock" aria-hidden="true"></i>{" "}
                          <strong>07:30 10/02/2023</strong>
                        </p>
                        <p className="w-100 mb-0 mt-1">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          <span>TƯ GIA NHÀ NỮ - </span>
                          <strong>
                            Đội 21, Thôn 4, Xã Thạch Đà, Mê Minh, Hà Nội
                          </strong>
                        </p>
                      </div>
                    </div>
                    <div className="info">
                      <div
                        className="calendar-button"
                        style={{
                          visibility: "hidden",
                          height: "0",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="atcb-initialized"
                          style={{ display: "block" }}
                        >
                          <script type="application/ld+json">
                            {JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": "Event",
                              name: "LỄ CƯỚI NHÀ NỮ (Đám cưới Kiến Văn và Việt Hoài)",
                              description:
                                "Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website: https://preview.iwedding.info",
                              startDate: "2023-02-10T07:30:00+07:00",
                              duration: "00:00",
                              location:
                                "123 Nguyễn Tất Thành, Hòa Phướng, Hải Châu, Đà Nẵng",
                              endDate: "2023-02-10T07:30:00+07:00",
                              image: [
                                "https://add-to-calendar-button.com/demo_assets/img/1x1.png",
                                "https://add-to-calendar-button.com/demo_assets/img/4x3.png",
                                "https://add-to-calendar-button.com/demo_assets/img/16x9.png",
                              ],
                            })}
                          </script>
                          <div
                            className="atcb-button-wrapper atcb-light"
                            style={{
                              fontSize: 16,
                            }}
                          >
                            <button
                              className="atcb-button atcb-click"
                              type="button"
                              id="atcb-btn-1"
                            >
                              <span className="atcb-icon">
                                <span className="atcb-icon-trigger">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200.016"
                                  >
                                    <path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-5.941 123.747c2.979 0 5.404 2.425 5.404 5.404s-2.425 5.404-5.404 5.404l-21.077-.065-.065 21.045c0 2.979-2.425 5.404-5.404 5.404s-5.404-2.425-5.404-5.404l.065-21.061-21.045-.081c-2.979 0-5.404-2.425-5.404-5.404s2.425-5.404 5.404-5.404l21.061.065.065-21.045c0-2.979 2.425-5.404 5.404-5.404s5.404 2.425 5.404 5.404l-.065 21.077 21.061.065zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.167V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.171c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.988 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.644 0-5.204.787-7.418 2.286l-51.006 36.411c-1.21.873-2.12 2.055-2.56 3.418-.441 1.366-.335 2.86.291 4.148.609 1.26 1.691 2.303 3.016 2.994l57.295 27.993c.745.367 1.553.545 2.356.545s1.606-.178 2.351-.545c.743-.367 1.329-.869 1.759-1.496 1.29-1.627 1.895-3.677 1.893-5.773v-41.12c0-2.764-1.31-5.451-3.556-7.189s-5.078-2.941-8.04-2.941zm26.01 20.156v21.621c0 .748-.188 1.511-.53 2.145-.34.628-.832 1.166-1.432 1.607l-19.931 14.177c-.262.188-.577.287-.883.287-.291 0-.572-.073-.83-.214-.484-.232-.932-.554-1.331-.93l-11.367-8.208c-1.238-.9-2.095-2.228-2.422-3.779-.355-1.538-.257-3.173.258-4.644.481-1.647 1.345-3.108 2.51-4.425l19.414-20.406c.838-.888 1.939-1.453 3.153-1.629 1.22-.169 2.438.267 3.39 1.197.968.933 1.511 2.211 1.577 3.507zM125.315 107.372l-37.267-18.596-37.132 27.357v30.417l37.13-27.36 37.269 18.596v-30.417z" />
                                  </svg>
                                </span>
                                <span className="atcb-text">Thêm vào Lịch</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  data-aos="flip-up"
                  className="animate-from-bottom animation-from-bottom"
                >
                  <div className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    <div className="d-flex align-items-center event-item-content">
                      <img
                        src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/45dfd859dd184042e2a6adaa320ac64b.jpeg"
                        alt="LỄ CƯỚI NHÀ NỮ"
                        width="100"
                        height="100"
                        className="d-inline-block rounded-circle me-0 mb-4 me-lg-3 mb-lg-0"
                      />
                      <div className="d-inline-block">
                        <h3 className="w-100">LỄ CƯỚI NHÀ NỮ</h3>
                        <div className="dresscode-colors-wrap">
                          <div className="dresscode-colors-event">
                            <i className="fa fa-user-tie"></i>
                            <span className="tooltip-dresscode">
                              Dress Code:{" "}
                            </span>
                            <div
                              className="dresscode-colors-item"
                              style={{ background: "#eda2b6" }}
                            ></div>
                            <div
                              className="dresscode-colors-item"
                              style={{ background: "#ffffff" }}
                            ></div>
                            <div
                              className="dresscode-colors-item"
                              style={{ background: "#623262" }}
                            ></div>
                          </div>
                        </div>
                        <p className="w-100 mb-2 mt-2">
                          <i className="fa fa-clock" aria-hidden="true"></i>{" "}
                          <strong>07:30 10/02/2023</strong>
                        </p>
                        <p className="w-100 mb-0 mt-1">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          <span>TƯ GIA NHÀ NỮ - </span>
                          <strong>
                            Đội 21, Thôn 4, Xã Thạch Đà, Mê Minh, Hà Nội
                          </strong>
                        </p>
                      </div>
                    </div>
                    <div className="info">
                      <div
                        className="calendar-button"
                        style={{
                          visibility: "hidden",
                          height: "0",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="atcb-initialized"
                          style={{ display: "block" }}
                        >
                          <script type="application/ld+json">
                            {JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": "Event",
                              name: "LỄ CƯỚI NHÀ NỮ (Đám cưới Năng Hưng và Thu Hà)",
                              description:
                                "Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website: https://preview.iwedding.info",
                              startDate: "2023-02-10T07:30:00+07:00",
                              duration: "00:00",
                              location:
                                "Đội 21, Thôn 4, Xã Thạch Đà, Mê Minh, Hà Nội",
                              endDate: "2023-02-10T07:30:00+07:00",
                              image: [
                                "https://add-to-calendar-button.com/demo_assets/img/1x1.png",
                                "https://add-to-calendar-button.com/demo_assets/img/4x3.png",
                                "https://add-to-calendar-button.com/demo_assets/img/16x9.png",
                              ],
                            })}
                          </script>
                          <div
                            className="atcb-button-wrapper atcb-light"
                            style={{
                              fontSize: 16,
                            }}
                          >
                            <button
                              className="atcb-button atcb-click"
                              type="button"
                              id="atcb-btn-1"
                            >
                              <span className="atcb-icon">
                                <span className="atcb-icon-trigger">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200.016"
                                  >
                                    <path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-5.941 123.747c2.979 0 5.404 2.425 5.404 5.404s-2.425 5.404-5.404 5.404l-21.077-.065-.065 21.045c0 2.979-2.425 5.404-5.404 5.404s-5.404-2.425-5.404-5.404l.065-21.061-21.045-.081c-2.979 0-5.404-2.425-5.404-5.404s2.425-5.404 5.404-5.404l21.061.065.065-21.045c0-2.979 2.425-5.404 5.404-5.404s5.404 2.425 5.404 5.404l-.065 21.077 21.061.065zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.167V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.171c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.988 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.644 0-5.204.787-7.418 2.286l-51.006 36.411c-1.21.873-2.12 2.055-2.56 3.418-.441 1.366-.335 2.86.291 4.148.609 1.26 1.691 2.303 3.016 2.994l57.295 27.993c.745.367 1.553.545 2.356.545s1.606-.178 2.351-.545c.743-.367 1.329-.869 1.759-1.496 1.29-1.627 1.895-3.677 1.893-5.773v-41.12c0-2.764-1.31-5.451-3.556-7.189s-5.078-2.941-8.04-2.941zm26.01 20.156v21.621c0 .748-.188 1.511-.53 2.145-.34.628-.832 1.166-1.432 1.607l-19.931 14.177c-.262.188-.577.287-.883.287-.291 0-.572-.073-.83-.214-.484-.232-.932-.554-1.331-.93l-11.367-8.208c-1.238-.9-2.095-2.228-2.422-3.779-.355-1.538-.257-3.173.258-4.644.481-1.647 1.345-3.108 2.51-4.425l19.414-20.406c.838-.888 1.939-1.453 3.153-1.629 1.22-.169 2.438.267 3.39 1.197.968.933 1.511 2.211 1.577 3.507zM125.315 107.372l-37.267-18.596-37.132 27.357v30.417l37.13-27.36 37.269 18.596v-30.417z" />
                                  </svg>
                                </span>
                                <span className="atcb-text">Thêm vào Lịch</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Additional list items would be similar to the above */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="bridesmaids"
        className="parallax-background bg-color-overlay"
        style={{
          backgroundImage:
            'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/98b3fc1637903e6b4265215b475fe2ad.jpg")',
          backgroundPosition: "center 138px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12" data-aos="fade-up">
              <h2 className="section-title light">Phù dâu</h2>
            </div>
          </div>
          <div className="row center">
            <div
              className="element bmaid-gmen col-sm-6 col-lg-4"
              data-aos="fade-right"
            >
              <div className="image">
                <img
                  src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/fa1780c6fe429eff4f2d564d6fbaff98.jpeg"
                  alt=""
                  width="434"
                  height="434"
                />
                <div className="hover-info neela-style">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <div className="content center">
                    <h3>
                      Lý Mạc Sầu<small>Phù dâu</small>
                    </h3>
                    <p>
                      Là cô gái đến từ vùng đất Cố Đô “Huế mộng Huế mơ” dịu
                      dàng, nết na và thùy mị. Với nhiều tài lẻ như ...
                      <a
                        className="button-see"
                        data-src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/fa1780c6fe429eff4f2d564d6fbaff98.jpeg"
                        data-content="Là cô gái đến từ vùng đất Cố Đô “Huế mộng Huế mơ” dịu dàng, nết na và thùy mị. Với nhiều tài lẻ như biết nấu ăn, cắm hoa, thêu thùa may vá."
                        style={{ fontSize: "14px", cursor: "pointer" }}
                      >
                        Xem thêm
                        <i className="bi bi-arrow-down-short"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="element bmaid-gmen col-sm-6 col-lg-4"
              data-aos="fade-left"
            >
              <div className="image">
                <img
                  src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/84729db4c190b37df0a2cdcedba3f9b2.jpeg"
                  alt=""
                  width="434"
                  height="434"
                />
                <div className="hover-info neela-style">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <div className="content center">
                    <h3>
                      Phạm Ðoan Trang<small>Phù dâu</small>
                    </h3>
                    <p>
                      Là cô gái gái Huế thân thiện, hay cười, dễ giao tiếp nhưng
                      thích yên tĩnh một mình. Thường hướng về những thói quen,
                      sở thích mang tính truyền thống.
                      <a
                        className="button-see"
                        data-src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/84729db4c190b37df0a2cdcedba3f9b2.jpeg"
                        data-content="Là cô gái gái Huế thân thiện, hay cười, dễ giao tiếp nhưng thích yên tĩnh một mình. Thường hướng về những thói quen, sở thích mang tính truyền thống."
                        style={{ fontSize: "14px", cursor: "pointer" }}
                      >
                        Xem thêm
                        <i className="bi bi-arrow-down-short"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Groomsmen />
      <RSVP />
      <Donate />
      <Footer />
      <div
        className="player"
        style={{
          display: "block",
          position: "fixed",
          bottom: 30,
          left: 20,
        }}
      >
        <div onClick={playPause} className="playerIcon">
          {!isPlaying ? (
            <span id="playerVolumeOff">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="27"
                fill="#fff"
                className="bi bi-volume-mute-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
              </svg>
            </span>
          ) : (
            <span id="playerVolumeOn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="27"
                fill="#fff"
                className="bi bi-volume-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
              </svg>
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
