import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { axiosClient } from "../../services/axiosClient";
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
  const [videos, setVideos] = useState<Video[]>([]);
  // const [selectedSong, setSelectedSong] = useState<Video | null>(null);
  const { setLoading } = useContext(AppContext);

  // Hàm tìm kiếm video từ YouTube
  const handleSearch = async () => {
    if (!query) return;
    setVideos([]);
    try {
      setLoading?.(true);
      const response = await axiosClient.get("/api/search", {
        params: {
          query: query,
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
        backgroundImage:
          'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/98b3fc1637903e6b4265215b475fe2ad.jpg")',
        backgroundPosition: "center 138px",
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
          <div className="row g-5 justify-content-center" data-aos="fade-up">
            {videos.map((video) => {
              return (
                <div
                  key={video.id.videoId}
                  className="col-md-12 col-lg-10 col-xl-6"
                >
                  <div
                    className="invite neela-style animate-from-left animation-from-left"
                    data-animation-direction="from-left"
                    data-animation-delay="100"
                  >
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSong;
