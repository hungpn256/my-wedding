import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
  };
}

interface OrderSongModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Cấu hình Modal
// Modal.setAppElement("#root");

const OrderSongModal: React.FC<OrderSongModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState<string>("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedSong, setSelectedSong] = useState<Video | null>(null);

  const API_KEY = "YOUR_YOUTUBE_API_KEY";

  // Hàm tìm kiếm video từ YouTube
  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            q: query,
            key: API_KEY,
            type: "video",
            maxResults: 5,
          },
        }
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  };

  // Hàm chọn bài hát
  const handleOrderSong = (video: Video) => {
    setSelectedSong(video);
    console.log("Ordered Song:", video);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Order Song Modal"
      className="modal"
    >
      <div className="row" data-aos="fade-down">
        <div className="col-sm-12">
          <h1 className="section-title">Đăng ký bài hát</h1>
        </div>
      </div>
      <div className="modal-search">
        <input
          type="text"
          className="modal-input"
          placeholder="Search for a song..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div
          rel="noopener noreferrer"
          className="btn btn-primary px-2 mt-2"
          style={{
            minWidth: "240px",
            maxWidth: "240px",
            width: "255px",
          }}
        >
          <span className="h-lines"></span>
          <span className="v-lines"></span>
          Search
        </div>
      </div>

      {/* Hiển thị kết quả tìm kiếm */}
      <div className="modal-video-list">
        {videos.map((video) => (
          <div key={video.id.videoId} className="modal-video-item">
            <h3 className="video-title">{video.snippet.title}</h3>
            <iframe
              className="video-frame"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="modal-button order-button"
              onClick={() => handleOrderSong(video)}
            >
              Order this Song
            </button>
          </div>
        ))}
      </div>

      {/* Nút đóng modal */}
      <button onClick={onClose} className="modal-close">
        X
      </button>
    </Modal>
  );
};

export default OrderSongModal;
