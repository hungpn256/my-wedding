import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { memo } from "react";
import OwlCarousel from "react-owl-carousel";

const Testimonials = () => {
  const testimonials = [
    "Tình yêu không phải là tìm kiếm người hoàn hảo, mà là học cách nhìn thấy sự hoàn hảo trong một người không hoàn hảo.",
    "Yêu một người là cho phép họ bước vào trái tim mình và hy vọng rằng họ sẽ ở lại mãi mãi.",
    "Tình yêu giống như gió, bạn không thể nhìn thấy nó, nhưng bạn có thể cảm nhận nó từng giây phút trong cuộc đời.",
    "Khi ta yêu thương ai đó thật lòng, điều quan trọng không phải là ta có thể làm gì cho họ, mà là ta có thể làm gì để mang lại hạnh phúc cho họ.",
    "Tình yêu là sự kỳ diệu khi hai con người tìm thấy nhau giữa biển người bao la và chọn cùng nhau đi qua mọi thăng trầm của cuộc sống.",
  ];

  return (
    <section id="testimonials" className="bg-color side-flowers-light">
      <div className="container" data-aos="fade-in">
        <div className="row">
          <div className="col-lg-12 col-xl-10 offset-xl-1">
            <OwlCarousel
              className="testimonials light"
              items={1}
              loop
              margin={10}
              dots
              autoplay
              smartSpeed={300}
            >
              {testimonials.map((quote, index) => (
                <div key={index} className="item">
                  <blockquote>{quote}</blockquote>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};
const TestimonialsMemo = memo(Testimonials);
export default TestimonialsMemo;
