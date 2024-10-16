import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../App";
import { axiosClient } from "../../services/axiosClient";

const ModalOrderSong = () => {
  const { orderSong, setDataOrderSong } = useContext(AppContext);
  const [showSendMessageToFB, setShowSendMessageToFB] = useState(false);
  return (
    <div className="modal-order-song">
      <div>
        {showSendMessageToFB ? (
          <>
            <div className="center">
              <button
                className="btn"
                type="submit"
                style={{ width: "214px" }}
                onClick={() => {
                  window.open(
                    `https://m.me/${
                      orderSong?.forGroom ? "Kendz256" : "ha.thu0104"
                    }`,
                    "_blank"
                  );
                }}
              >
                <span className="h-lines"></span>
                <span className="v-lines"></span>
                Xác nhận với {orderSong?.forGroom ? "chú rể" : "cô dâu"}
              </button>
            </div>
            <div
              className="center"
              onClick={() =>
                setDataOrderSong?.({
                  forGroom: false,
                  youtubeUrl: "",
                  name: "",
                })
              }
            >
              <button className="btn" type="submit" style={{ width: "214px" }}>
                <span className="h-lines"></span>
                <span className="v-lines"></span>
                Đóng
              </button>
            </div>
          </>
        ) : (
          <form
            id="wish-form"
            className="form validate-rsvp-form row contact-validation-active shadow"
            style={{
              backgroundColor: "white",
              maxWidth: 300,
              margin: "100px auto",
              padding: "10px",
              borderRadius: 5,
              paddingTop: 40,
            }}
            onSubmit={async (e) => {
              try {
                e.preventDefault();
                await axiosClient.post("/api/order-song", {
                  name: (e.target as any).name.value,
                  youtubeUrl: orderSong?.youtubeUrl,
                  forGroom: orderSong?.forGroom,
                });
                setShowSendMessageToFB(true);
                toast.success("Đăng ký thành công");
              } catch (error) {
                toast.error("Có lỗi xảy ra");
              }
            }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Tên gợi nhớ*"
                className="form-control"
                required
              />
            </div>
            <div className="center">
              <button className="btn" type="submit" style={{ width: "214px" }}>
                <span className="h-lines"></span>
                <span className="v-lines"></span>
                Đăng ký
              </button>
            </div>
            <div
              className="clearfix error-handling-messages"
              style={{ display: "block" }}
            ></div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModalOrderSong;
