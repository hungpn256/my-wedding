import React, { useState } from "react";
import { axiosClient } from "../../services/axiosClient";
import Spin from "../Spin";
import "./style.css";

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
  };
}

// Cấu hình Modal
// Modal.setAppElement("#root");

const OrderSong: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [videos, setVideos] = useState<Video[]>([]);
  // const [selectedSong, setSelectedSong] = useState<Video | null>(null);

  // Hàm tìm kiếm video từ YouTube
  const handleSearch = async () => {
    if (!query) return;
    setVideos([]);
    try {
      setLoading?.(true);
      const response = await axiosClient.get("/api/search", {
        params: {
          query: `karaoke ${query}`,
        },
      });
      setVideos(response.data.data.items);
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    } finally {
      setLoading?.(false);
    }
  };

  // Hàm chọn bài hát
  // const handleOrderSong = (video: Video) => {
  //   setSelectedSong(video);
  //   console.log("Ordered Song:", video);
  // };

  return (
    <section
      id="order-song"
      className="parallax-background bg-color-overlay"
      style={{
        backgroundImage: 'url("compressor/2T9A5900.jpg")',
        backgroundPosition: "center -200px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12" data-aos="fade-up">
            <h2 className="section-title light">Đăng ký bài hát</h2>
          </div>
        </div>
        <div className="row center">
          <div className="modal-search">
            <div className="mt-3 w-100">
              <input
                type="text"
                name="name"
                placeholder="Tên bài hát*"
                className="form-control"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div
              rel="noopener noreferrer"
              className="btn btn-primary text-white px-2"
              style={{
                width: "100px",
                borderColor: "white",
              }}
              onClick={handleSearch}
            >
              <span className="h-lines"></span>
              <span className="v-lines"></span>
              Search
            </div>
          </div>
          {loading ? (
            <Spin />
          ) : (
            <div className="row g-5 justify-content-center" data-aos="fade-up">
              {videos.map((video) => {
                return (
                  <div
                    key={video.id.videoId}
                    className="col-md-12 col-lg-10 col-xl-6"
                    data-aos="fade-up"
                  >
                    <div className="invite neela-style">
                      <span className="h-lines"></span>
                      <span className="v-lines"></span>
                      <iframe
                        className="border border-5 border-white w-100"
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                        }}
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div
                      className="btn btn-primary text-white px-2"
                      style={{
                        borderColor: "white",
                      }}
                      onClick={() => {
                        window.open(
                          "https://m.me/Kendz256?ref=yourCustomText",
                          "_blank"
                        );
                      }}
                    >
                      <span className="h-lines"></span>
                      <span className="v-lines"></span>
                      Gửi tặng nhà trai
                    </div>
                    <div
                      className="btn btn-primary text-white px-2"
                      style={{
                        borderColor: "white",
                      }}
                      onClick={() => {
                        window.open(
                          "https://m.me/ha.thu0104?ref=yourCustomText",
                          "_blank"
                        );
                      }}
                    >
                      <span className="h-lines"></span>
                      <span className="v-lines"></span>
                      Gửi tặng nhà gái
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderSong;
