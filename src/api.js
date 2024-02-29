import axios from "axios";
import md5 from "md5";

const BASEURL = "https://api.valantis.store:41000/";
const PASSWORD = "Valantis";
const timestamp = new Date().toISOString().split("T")[0].replace(/-/g, "");

const api = axios.create({
  baseURL: BASEURL,
  headers: { "X-Auth": md5(`${PASSWORD}_${timestamp}`) },
});

export const getItems = async (offset) =>
  await api
    .post("/", {
      action: "get_ids",
      params: { offset, limit: 10 },
    })
    .then(async (getIds) => {
      return await api
        .post("/", {
          action: "get_items",
          params: { ids: getIds.data.result },
        })
        .then((res) => res.data.result)
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
