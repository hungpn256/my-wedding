import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosClient } from "../../services/axiosClient";

const VerifyRSVP = () => {
  const location = useLocation();
  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    try {
      const query = new URLSearchParams(location.search);
      await axiosClient.get("/api/rsvp?id=" + query.get("id"));
      toast.success("ok");
    } catch {
      toast("error");
    }
  };
  return <div>VerifyRSVP</div>;
};

export default VerifyRSVP;
