import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const Testimonials = () => {
  const testimonials = [
    "Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng.",
    "Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng.",
    "Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng.",
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

export default Testimonials;
