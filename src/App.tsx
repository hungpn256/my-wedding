import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Groomsmen from "./components/Groomsmen";
import Header from "./components/Header";
import Home from "./components/Home";
import RSVP from "./components/RSVP";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Header />
      <Home />
      <section id="couple">
        <div className="container">
          <div className="row about-elems-wrapper">
            <div
              className="element col-md-6 col-xl-4 offset-xl-2 animate-from-left animation-from-left"
              data-animation-direction="from-left"
              data-animation-delay="300"
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
                      Hoàng Kiến Văn<small>The Groom</small>
                    </h3>
                    <p>
                      Là bác sĩ nha khoa hiện đang công tác tại một phòng khám
                      nha khoa ở Quận 1 thành phố Hồ Chí Minh. Là...
                      <a
                        className="button-see"
                        data-src="https://cdn.biihappy.com/ziiweb/default/website/3b48bc6125ce6d186297a3e90a11085e.jpeg"
                        data-content="Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phố Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình. Với anh: “Gia đình là điểm tựa vững chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người. Đó luôn là nơi tràn ngập tình yêu thương để ta trở về.”"
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
              data-animation-direction="fade"
              data-animation-delay="500"
            >
              <i className="icon-two-hearts"></i>
            </div>

            <div
              className="element col-md-6 col-xl-4 animate-from-right animation-from-right"
              data-animation-direction="from-right"
              data-animation-delay="400"
            >
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
                      Ngô Việt Hoài<small>The Bride</small>
                    </h3>
                    <p>
                      Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm
                      việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và
                      Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du
                      lịch.
                      <a
                        className="button-see"
                        data-src="https://cdn.biihappy.com/ziiweb/default/website/59b631f29bfb9f7cd20437d27ddbe4db.jpeg"
                        data-content="Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là một người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích vẽ vời, nuôi mèo và nuôi ước mơ có cho mình một vườn hồng khoe sắc."
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
              data-animation-direction="from-bottom"
              data-animation-delay="300"
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
                <span>Kiến Văn</span> &amp; <span>Việt Hoài</span>
              </p>
              {/* <img src="https://preview.iwedding.info/templates/template19/images/signature-2.png" alt="Andrew and Isabella" /> */}
              <div className="parent-info-group">
                <div className="parent-infos">
                  <div className="parent-info">
                    <span className="parent-title">Con ông:</span>
                    <span className="parent-name">Hoàng Anh Kiệt</span>
                  </div>
                  <div className="parent-info">
                    <span className="parent-title">Con bà:</span>
                    <span className="parent-name">Nguyễn Thị Hoài</span>
                  </div>
                </div>

                <div className="parent-infos">
                  <div className="parent-info">
                    <span className="parent-title">Con ông:</span>
                    <span className="parent-name">Ngô Xuân Nghĩa</span>
                  </div>
                  <div className="parent-info">
                    <span className="parent-title">Con bà:</span>
                    <span className="parent-name">Trần Hồng Thắm</span>
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
          <div className="row">
            <div className="col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <div className="timeline">
                <div
                  className="year animate-from-top animation-from-top"
                  data-animation-direction="from-top"
                  data-animation-delay="250"
                >
                  <span className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    December 12 2015
                  </span>
                </div>
                <div className="gallery-container">
                  <div
                    className="timeline-gallery-wrapper animate-from-left animation-from-left"
                    data-animation-direction="from-left"
                    data-animation-delay="250"
                  >
                    <div className="timeline-gallery-del">
                      <div className="item text-center">
                        <img
                          src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/0f99c255f7aa7714d366ebde51c86d53.jpeg"
                          alt="Bạn có tin vào tình yêu online không?"
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
                        <h4>Bạn có tin vào tình yêu online không?</h4>
                        <p>
                          Tôi đã từng không tin vào tình yêu online. Đã từng
                          nghĩ làm sao có thể thích một người chưa từng gặp mặt?
                          Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã
                          hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ
                          đăng một dòng status trên facebook than thở, vu vơ đùa
                          giỡn nói chuyện với một người xa lạ chưa từng quen. Mà
                          nào hay biết, 4 năm sau người ấy lại là chồng mình.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="year animate-from-top animation-from-top"
                  data-animation-direction="from-top"
                  data-animation-delay="250"
                >
                  <span className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    August 04 2016
                  </span>
                </div>
                <div className="gallery-container">
                  <div
                    className="timeline-gallery-wrapper animate-from-left animation-from-left"
                    data-animation-direction="from-left"
                    data-animation-delay="250"
                  >
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
                          Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi
                          chiều cuối tuần thường chạy xe vòng quanh qua những
                          con phố, len lỏi trong từng dòng người tấp nập. Hay
                          thậm chí là ghé vào một quán cà phê ven đường để ngồi
                          đó và cảm nhận về cuộc sống của riêng mình. Đôi khi
                          lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời,
                          người con trai ấy xuất hiện, nắm tay rồi thủ thỉ vào
                          tai: “Hy vọng sau này anh được làm những điều ấy cùng
                          em”.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="year animate-from-top animation-from-top"
                  data-animation-direction="from-top"
                  data-animation-delay="250"
                >
                  <span className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    May 10 2018
                  </span>
                </div>
                <div className="gallery-container">
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
                          5 năm bên nhau không phải là quãng thời gian quá dài,
                          nhưng đủ cho chúng ta nhận ra được rất nhiều điều. Yêu
                          nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những
                          khó khăn trong cuộc sống. Chúng ta từ 2 con người xa
                          lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp
                          tục cùng nhau sang trang mới. Giây phút anh ngỏ lời
                          “Làm vợ anh nhé!”, em đã nguyện ý đời này, đi đâu cũng
                          được, miễn là cùng anh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="year animate-from-top animation-from-top"
                  data-animation-direction="from-top"
                  data-animation-delay="250"
                >
                  <span className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    July 28 2018
                  </span>
                </div>
                <div className="gallery-container">
                  <div
                    className="timeline-gallery-wrapper animate-from-left animation-from-left"
                    data-animation-direction="from-left"
                    data-animation-delay="250"
                  >
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

                  <div
                    className="description-wrapper animate-from-bottom animation-from-bottom"
                    data-animation-direction="from-bottom"
                    data-animation-delay="250"
                  >
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
                <div
                  data-animation-direction="from-top"
                  data-animation-delay="250"
                  className="animate-from-top animation-from-top"
                >
                  <i className="icon-diamond-ring"></i>
                </div>
                <div
                  className="punchline animate-from-bottom animation-from-bottom"
                  data-animation-direction="from-bottom"
                  data-animation-delay="250"
                >
                  <small>This is where our FOREVER BEGINS!</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="invitation"
        className="parallax-background bg-color-overlay padding-divider-top section-divider-bottom-1"
        style={{
          backgroundImage:
            'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/10896c191ff2008ed9d07a3ed53616e4.jpg")',
          backgroundPosition: "center 162px",
        }}
      >
        <div className="section-divider-top-1 off-section"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="section-title light">The Big Day!</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 center">
              <div
                className="invite neela-style animate-from-left animation-from-left"
                data-animation-direction="from-left"
                data-animation-delay="100"
              >
                <span className="h-lines"></span>
                <span className="v-lines"></span>
                <div className="invite_title">
                  <div className="text">
                    Save<small>the</small>Date
                  </div>
                </div>

                <div className="invite_info px-2 px-lg-4">
                  <h2 className="fs-1">
                    Kiến Văn <small>&amp;</small> Việt Hoài
                  </h2>
                  <div>
                    Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng
                    tôi có thêm một niềm hạnh phúc!
                  </div>
                  <div className="center m-0 mt-2">
                    <a
                      href="#rsvp"
                      className="btn btn-primary reverse scrollto text-white px-2"
                      style={{
                        minWidth: "240px",
                        maxWidth: "240px",
                        width: "255px",
                      }}
                    >
                      <span className="h-lines"></span>
                      <span className="v-lines"></span>
                      Gửi lời chúc
                    </a>
                  </div>
                  <div className="center m-0">
                    <a
                      href="https://preview.iwedding.info/rsvp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary reverse text-white px-2 mt-2"
                      style={{
                        minWidth: "240px",
                        maxWidth: "240px",
                        width: "255px",
                      }}
                    >
                      <span className="h-lines"></span>
                      <span className="v-lines"></span>
                      Xác nhận tham dự
                    </a>
                  </div>
                  <div className="date">04 Tháng 4 2024</div>
                  <div className="count-down-clock">
                    <div
                      id="clock"
                      data-date="2024-04-04"
                      data-text-day="Ngày"
                      data-text-hour="Giờ"
                      data-text-minute="Phút"
                      data-text-second="Giây"
                    >
                      <div className="box">
                        <div>140</div> <span>Ngày</span>
                      </div>
                      <div className="box">
                        <div>13</div> <span>Giờ</span>
                      </div>
                      <div className="box">
                        <div>46</div> <span>Phút</span>
                      </div>
                      <div className="box">
                        <div>41</div> <span>Giây</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="section-title">Album Hình Cưới</h1>
              {/* <div className="center m-0 mt-2 mb-2">
          <a
            href="https://preview.iwedding.info/photo-album"
            target="_blank"
            className="btn btn-primary px-2"
            style={{ minWidth: '240px', maxWidth: '240px' }}
          >
            Xem album
          </a>
        </div> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div
                className="gallery-container gallery-fancybox masonry-gallery"
                style={{ position: "relative", height: "1967.45px" }}
              >
                {/* JSX doesn't support inline <script> tags. You need to handle this separately in your React code. */}
                {/* 
          photoGalleries.push({
            src : "https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg",
            thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/small.jpg",
            subHtml: `<div class="lg-sub-html"><h4>Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn</h4></div>`
          });
          */}

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="0"
                  style={{ position: "absolute", left: "0%", top: "0px" }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>
                {/* Repeat similar blocks for other images */}

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="1"
                  style={{ position: "absolute", left: "33.2449%", top: "0px" }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/619902a5f7c65c763d2ef0e2/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="2"
                  style={{ position: "absolute", left: "66.5782%", top: "0px" }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/619902a0d5c0e352ac024b43/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="3"
                  style={{
                    position: "absolute",
                    left: "33.2449%",
                    top: "557px",
                  }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/61990322c41d7b37de534633/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="4"
                  style={{
                    position: "absolute",
                    left: "66.5782%",
                    top: "557px",
                  }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/6199029c1ca1d308fe5da284/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="5"
                  style={{ position: "absolute", left: "0%", top: "558px" }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/61990291c41d7b37de534632/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="6"
                  style={{
                    position: "absolute",
                    left: "66.5782%",
                    top: "821px",
                  }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/6199028d8d8a4918ca205514/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="7"
                  style={{
                    position: "absolute",
                    left: "66.5782%",
                    top: "1096px",
                  }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/6199028adb8f76231c132062/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="8"
                  style={{
                    position: "absolute",
                    left: "33.2449%",
                    top: "1130px",
                  }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/61990285d5c0e352ac024b42/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="9"
                  style={{ position: "absolute", left: "0%", top: "1131px" }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/619902821ca1d308fe5da283/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>

                <div
                  className="grid grid-item btn-see-more-gallery"
                  data-index="10"
                  style={{ position: "absolute", left: "0%", top: "1387px" }}
                >
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/galleries/6199027ed7e97a1853119578/small.jpg"
                    alt=""
                    className="img img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="invitation"
        className="parallax-background bg-color-overlay padding-divider-top"
        style={{
          backgroundImage:
            'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/d4f33748bf87fde12d34aa8146e57b4c.jpg")',
          backgroundPosition: "center -134px",
        }}
      >
        <div className="section-divider-top-1 off-section"></div>
        <div className="container">
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
              <h2 className="section-title-lg desc text-white">Sự Kiện Cưới</h2>
              <div className="section-desc mb-5 px-5 text-center">
                Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và
                sát cánh hơn trong những ngày tồi tệ.
              </div>
              <ul className="wedding-gifts">
                <li
                  data-animation-direction="from-bottom"
                  data-animation-delay="300"
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
                            123 Nguyễn Tất Thành, Hòa Phướng, Hải Châu, Đà Nẵng
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
                  data-animation-direction="from-bottom"
                  data-animation-delay="300"
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
                            123 Nguyễn Tất Thành, Hòa Phướng, Hải Châu, Đà Nẵng
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
            <div className="col-sm-12">
              <h2 className="section-title light">Phù dâu</h2>
            </div>
          </div>
          <div className="row center">
            <div
              className="element bmaid-gmen col-sm-6 col-lg-4 animate-from-top animation-from-top"
              data-animation-direction="from-top"
              data-animation-delay="300"
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
              className="element bmaid-gmen col-sm-6 col-lg-4 animate-from-top animation-from-top"
              data-animation-direction="from-top"
              data-animation-delay="300"
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
    </>
  );
}

export default App;
