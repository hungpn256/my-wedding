import { memo } from "react";

const Invitation = () => {
  return (
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
        <div className="row" data-aos="fade-down">
          <div className="col-sm-12">
            <h1 className="section-title light">The Big Day!</h1>
          </div>
        </div>

        <div className="row" data-aos="fade-up">
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
                  Năng Hưng <small>&amp;</small> Thu Hà
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
                <div className="date">10 Tháng 11 2024</div>
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
  );
};

const InvitationMemo = memo(Invitation);
export default InvitationMemo;
