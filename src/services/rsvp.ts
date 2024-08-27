import { IRSVP } from "../models/rsvp";
import { axiosClient } from "./axiosClient";

export const getRsvp = (page: number, limit: number) =>
  axiosClient.get("/api/rsvp", { params: { page, limit } });

export const createRsvp = (data: IRSVP) => axiosClient.post("/api/rsvp", data);
