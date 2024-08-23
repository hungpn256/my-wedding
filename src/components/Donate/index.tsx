import QRHung from "/src/assets/qr-hung.jpg";
import QRHa from "/src/assets/qr-ha.jpg";
const Donate = () => {
  return (
    <section id="donate">
      <div className="container" data-aos="flip-up">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="section-title">Hộp mừng cưới</h2>
          </div>
        </div>
      </div>

      <div className="container donate-box">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-lg-4 donate-card" data-aos="fade-up">
            <div className="map-info-container">
              <div className="info-wrapper mt-0">
                <div className="location-info">
                  <div className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    <h4 className="fs-5">Mừng cưới đến chú rể</h4>
                    <img
                      className="qr-code-image m-auto mb-2"
                      src={QRHung}
                      alt="QR Code cho chú rể"
                    />
                    <p>
                      Ngân hàng: <strong>MBBank</strong>
                    </p>
                    <p>
                      Tên tài khoản: <strong>3696925062000</strong>
                    </p>
                    <p>
                      Số tài khoản: <strong>Phạm Năng Hưng</strong>
                    </p>
                    <div className="info-map-divider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 donate-card" data-aos="fade-up">
            <div className="map-info-container">
              <div className="info-wrapper mt-0">
                <div className="location-info">
                  <div className="neela-style">
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    <h4 className="fs-5">Mừng cưới đến cô dâu</h4>
                    <img
                      className="qr-code-image m-auto mb-2"
                      src={QRHa}
                      alt="QR Code cho cô dâu"
                    />
                    <p>
                      Ngân hàng: <strong>MBBank</strong>
                    </p>
                    <p>
                      Tên tài khoản: <strong>4140101042000</strong>
                    </p>
                    <p>
                      Số tài khoản: <strong>Đỗ Thị Thu Hà</strong>
                    </p>
                    <div className="info-map-divider"></div>
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

export default Donate;
