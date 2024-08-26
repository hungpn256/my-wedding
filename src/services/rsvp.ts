import axios from "axios";
import { IRSVP } from "../models/rsvp";

axios.defaults.baseURL = "https://hungpn256.click/";

export const getRsvp = (page: number, limit: number) =>
  axios.get("/api/rsvp", { params: { page, limit } });

export const createRsvp = (data: IRSVP) => axios.post("/api/rsvp", data);
