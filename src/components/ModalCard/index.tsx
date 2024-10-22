import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeString } from "../../pages/CreateLink";

const ModalCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    value: "",
    forGroom: false,
  });
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const query = new URLSearchParams(location.search);
      const data = query.get("name");
      if (data) {
        const dataEncoded = JSON.parse(decodeString(data) || "");
        setData(dataEncoded);
        setShowModal(true);
      }
    } catch {
      navigate("/");
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div
      className="modal-order-song"
      onClick={closeModal}
      style={{
        overflow: "auto",
        height: "100vh",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          margin: "0 auto",
          padding: 20,
          borderRadius: 5,
          maxWidth: 600,
        }}
      >
        <div
          style={{
            position: "relative",
            aspectRatio: "1295 / 2048",
            width: 500,
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "32.2%",
              textAlign: "center",
              width: "100%",
              left: 0,
              fontSize: "clamp(0.2rem, 3vw, 1rem)",
            }}
          >
            {data.value}
          </div>
          <img
            src={data.forGroom ? "IMG_4428.JPG" : "IMG_4445.JPG"}
            style={{
              aspectRatio: "1295 / 2048",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
