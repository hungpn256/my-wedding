import { memo, useEffect, useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Invitation = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-11-10T00:00:00"); // 10 tháng 11 năm 2024
    const currentDate = new Date();

    const difference = targetDate.getTime() - currentDate.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Dọn dẹp bộ đếm
  }, []);

  return (
    <section
      id="invitation"
      className="parallax-background bg-color-overlay padding-divider-top section-divider-bottom-1"
      style={{
        backgroundImage: 'url("compressor/2T9A6019.jpg")',
        backgroundPosition: "center -50px",
      }}
    >
      <LazyLoadComponent>
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
                      href="#order-song"
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
                      Đăng ký bài hát
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
                        <div>{timeLeft.days}</div> <span>Ngày</span>
                      </div>
                      <div className="box">
                        <div>{timeLeft.hours}</div> <span>Giờ</span>
                      </div>
                      <div className="box">
                        <div>{timeLeft.minutes}</div> <span>Phút</span>
                      </div>
                      <div className="box">
                        <div>{timeLeft.seconds}</div> <span>Giây</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazyLoadComponent>
    </section>
  );
};

const InvitationMemo = memo(Invitation);
export default InvitationMemo;
