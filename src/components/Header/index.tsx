import { useEffect } from "react";
import "./styles.css";
const Header = () => {
  useEffect(() => {
    // const navItems = document.querySelectorAll(".menu-item-link");
    // const sections = document.querySelectorAll("section");
    // const observe = new IntersectionObserver(
    //   (item) => {
    //     if (item[0].isIntersecting) {
    //       item[0] &&
    //         navItems.forEach((i: any) => {
    //           if (
    //             i
    //               .getAttribute("href")
    //               .includes(item[0].target.getAttribute("id"))
    //           ) {
    //             i.classList.add("active");
    //           } else {
    //             i.classList.remove("active");
    //           }
    //         });
    //     }
    //   },
    //   { threshold: 0.5 }
    // );
    // sections.forEach((item) => observe.observe(item));
    // window.addEventListener(
    //   "scroll",
    //   function (e) {
    //     const nav = document.getElementById("navbar") as HTMLElement;
    //     if (window.scrollY > 0) {
    //       nav.classList.add("sticky");
    //     } else {
    //       nav.classList.remove("sticky");
    //     }
    //     const scrollUp = document.getElementById(
    //       "scroll-up-btn"
    //     ) as HTMLElement;
    //     if (window.scrollY > 500) {
    //       scrollUp.classList.add("show");
    //     } else {
    //       scrollUp.classList.remove("show");
    //     }
    //   },
    //   { passive: true }
    // );
  }, []);

  return (
    <div>
      <div className="scroll-up-btn" id="scroll-up-btn">
        <a href="#home" style={{ color: "white" }}>
          {/* <FontAwesomeIcon icon={faAngleUp} /> */}
        </a>
      </div>
      <div className="header">
        <nav className="header-nav" id="navbar">
          <div className="max-width">
            <input type="checkbox" id="check"></input>
            <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>
            <label className="brand">
              <a
                href="#home"
                className="nav-logo d-flex align-items-center h-100 brand mt-1"
              >
                <h1 style={{ fontSize: 30 }}>
                  H
                  <span className="main-color" style={{ margin: "0 5px" }}>
                    <i className="fa fa-heart"></i>
                  </span>
                  H
                </h1>
              </a>
            </label>
            <ul className="menu mt-2">
              <li className="menu-item">
                <a className="menu-item-link active" href="#couple">
                  Cặp Đôi
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-item-link" href="#our-story-title">
                  Chuyện Tình Yêu
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-item-link" href="#invitation">
                  Phù Dâu & Phù Rể
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-item-link" href="#skills">
                  Album Hình Cưới
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-item-link" href="#projects">
                  Sự kiện cưới
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-item-link" href="#contact">
                  Sổ Lưu Bút
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-item-link" href="#contact">
                  Mừng Cưới
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
