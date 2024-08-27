import { memo, useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { IRSVP } from "../../models/rsvp";
import { createRsvp, getRsvp } from "../../services/rsvp";

const RSVP = () => {
  const [page] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);
  const { setLoading } = useContext(AppContext);
  useEffect(() => {
    getData(page);
  }, [page]);

  const getData = async (page: number) => {
    try {
      setLoading?.(true);
      const res = await getRsvp(page, 10);
      setData(res.data.rsvp);
    } catch (error) {
      console.log("🚀 ~ getData ~ error:", error);
    } finally {
      setTimeout(() => {
        setLoading?.(false);
      }, 400);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    try {
      e.preventDefault();
      await createRsvp({ name, email, content });
      getData(page);
      setName("");
      setContent("");
      setEmail("");
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  };
  return (
    <section id="rsvp" className="section-bg-color extra-padding-section">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3">
            <div className="form-wrapper flowers neela-style">
              <span className="h-lines"></span>
              <span className="v-lines"></span>
              <h1 className="section-title">Sổ Lưu Bút</h1>
              <form
                id="wish-form"
                className="form validate-rsvp-form row contact-validation-active"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tên của bạn*"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="textarea-emoji-picker">
                  <div className="vitualTextarea">
                    <textarea
                      id="content"
                      className="form-control"
                      name="content"
                      placeholder="Nhập lời chúc của bạn*"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <div className="textAreaIcons">
                      <span
                        className="show-autocomplete tooltip-custom"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Lời chúc gợi ý"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-lightbulb"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"></path>
                        </svg>
                      </span>
                      <span
                        className="hide-autocomplete tooltip-custom"
                        style={{ display: "none" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-lightbulb-off"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.23 4.35A6 6 0 0 0 2 6c0 1.691.7 3.22 1.826 4.31.203.196.359.4.453.619l.762 1.769A.5.5 0 0 0 5.5 13a.5.5 0 0 0 0 1 .5.5 0 0 0 0 1l.224.447a1 1 0 0 0 .894.553h2.764a1 1 0 0 0 .894-.553L10.5 15a.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .288-.091L9.878 12H5.83l-.632-1.467a3 3 0 0 0-.676-.941 4.98 4.98 0 0 1-1.455-4.405zm1.588-2.653.708.707a5 5 0 0 1 7.07 7.07l.707.707a6 6 0 0 0-8.484-8.484zm-2.172-.051a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708"
                          ></path>
                        </svg>
                      </span>
                      <span
                        className="emoji-picker-button tooltip-custom"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Chèn biểu tượng"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-emoji-smile"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                          <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"></path>
                        </svg>
                      </span>
                      <div
                        className="wishes-autocomplete-content"
                        style={{ display: "none" }}
                      >
                        <input
                          type="text"
                          id="searchWishSuggestions"
                          onKeyUp={() => {
                            /* Implement searchWishSuggestionsFunction */
                          }}
                          placeholder="Tìm kiếm..."
                        />
                        <ul id="wishSuggestions">
                          {/* Add your wish suggestions here */}
                          <li>
                            <a className="showContent" href="#">
                              Chúc mừng hạnh phúc! Chúc hai bạn trăm năm hạnh
                              phúc!
                            </a>
                          </li>
                          {/* ... other suggestions */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <button
                    className="btn btn-primary submit_form"
                    style={{ width: "214px" }}
                    onClick={onSubmit}
                  >
                    <span className="h-lines"></span>
                    <span className="v-lines"></span>
                    Gửi lời chúc
                  </button>
                </div>
                <div className="clearfix error-handling-messages">
                  <div id="success">Thank you</div>
                  <div id="error">
                    Error occurred while sending email. Please try again later.
                  </div>
                </div>
              </form>
              <div className="wish-box">
                {data.map((item: IRSVP) => {
                  return (
                    <div className="wish-box-item">
                      <strong>{item.name}</strong>
                      <p>{item.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const RSVPMemo = memo(RSVP);
export default RSVPMemo;
