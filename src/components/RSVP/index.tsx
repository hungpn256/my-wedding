import { memo, useEffect, useState } from "react";
import { IRSVP } from "../../models/rsvp";
import { createRsvp, getRsvp } from "../../services/rsvp";
import Spin from "../Spin";

const RSVP = () => {
  const [page] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<
    | {
        type: "success" | "error";
        message?: string;
      }
    | undefined
  >();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(page);
  }, [page]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timeout: any;
    if (message) {
      timeout = setTimeout(() => {
        setMessage(undefined);
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  const getData = async (page: number) => {
    try {
      const res = await getRsvp(page, 10);
      setData(res.data.rsvp);
    } catch (error) {
      console.log("🚀 ~ getData ~ error:", error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    try {
      if (loading) return;
      setLoading(true);
      e.preventDefault();
      await createRsvp({ name, email, content });
      setMessage({ type: "success" });
      getData(page);
      setName("");
      setContent("");
      setEmail("");
    } catch (error) {
      setMessage({
        type: "error",
        message: "Vui lòng nhập đủ thông tin, đúng định dạng email",
      });
      console.log("🚀 ~ onSubmit ~ error:", error);
    } finally {
      setLoading(false);
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
                <div
                  className="clearfix error-handling-messages"
                  style={{ display: "block" }}
                >
                  {message?.type === "success" && (
                    <div data-aos="fade-up" id="success">
                      {message.message || "Thank you"}
                    </div>
                  )}
                  {message?.type === "error" && (
                    <div data-aos="fade-up" id="error">
                      {message.message ||
                        "Error occurred while sending email. Please try again later."}
                    </div>
                  )}
                  {loading && (
                    <div className="center">
                      <Spin />
                    </div>
                  )}
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
