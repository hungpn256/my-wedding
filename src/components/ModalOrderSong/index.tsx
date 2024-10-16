import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../App";
import { axiosClient } from "../../services/axiosClient";
import Spin from "../Spin";

const ModalOrderSong = () => {
  const { orderSong, setDataOrderSong } = useContext(AppContext);
  const [showSendMessageToFB, setShowSendMessageToFB] = useState(false);
  const [loading, setLoading] = useState(false);
  const closeModal = () =>
    setDataOrderSong?.({
      forGroom: false,
      youtubeUrl: "",
      name: "",
      dataYoutube: undefined,
    });
  return (
    <div className="modal-order-song" onClick={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="shadow"
        style={{
          backgroundColor: "white",
          maxWidth: 500,
          margin: "100px auto",
          padding: 20,
          borderRadius: 5,
          paddingTop: 50,
        }}
      >
        {showSendMessageToFB ? (
          <div>
            <div className="center w-80" style={{ fontSize: 20 }}>
              Cảm ơn bạn đã đăng ký gửi tặng bài hát{" "}
              {orderSong?.dataYoutube?.snippet?.title}
            </div>
            <div className="center">
              <button
                className="btn"
                type="submit"
                style={{ width: "80%" }}
                onClick={() => {
                  window.open(
                    `https://m.me/${
                      orderSong?.forGroom ? "Kendz256" : "ha.thu0104"
                    }`,
                    "_blank"
                  );
                }}
              >
                <span className="h-lines" style={{ zIndex: 1 }}></span>
                <span className="v-lines" style={{ zIndex: 1 }}></span>
                Xác nhận với {orderSong?.forGroom ? "chú rể" : "cô dâu"}
              </button>
            </div>
            <div className="center" onClick={closeModal}>
              <button className="btn" type="submit" style={{ width: "80%" }}>
                <span className="h-lines" style={{ zIndex: 1 }}></span>
                <span className="v-lines" style={{ zIndex: 1 }}></span>
                Đóng
              </button>
            </div>
          </div>
        ) : (
          <form
            id="wish-form"
            className="form validate-rsvp-form row contact-validation-active"
            onSubmit={async (e) => {
              try {
                e.preventDefault();
                if (!orderSong?.youtubeUrl || !orderSong?.dataYoutube) {
                  closeModal();
                  return toast.error("Có lỗi xảy ra");
                }
                setLoading(true);

                await axiosClient.post("/api/order-song", {
                  name: (e.target as any).name.value,
                  youtubeUrl: orderSong?.youtubeUrl,
                  forGroom: orderSong?.forGroom,
                });
                setShowSendMessageToFB(true);
                toast.success("Đăng ký thành công");
              } catch (error) {
                toast.error("Có lỗi xảy ra");
              } finally {
                setLoading(false);
              }
            }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Tên gợi nhớ* VD: Dương bạn đại học"
                className="form-control"
                required
              />
            </div>
            <div className="center">
              <button className="btn" type="submit" style={{ width: "214px" }}>
                <span className="h-lines" style={{ zIndex: 1 }}></span>
                <span className="v-lines" style={{ zIndex: 1 }}></span>
                {loading ? <Spin /> : "Đăng ký"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModalOrderSong;
