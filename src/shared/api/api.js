import axios from "axios";
import md5 from "md5";

const BASEURL = "https://api.valantis.store:41000/";
const PASSWORD = "Valantis";
const timestamp = new Date().toISOString().split("T")[0].replace(/-/g, "");

const api = axios.create({
  baseURL: BASEURL,
  headers: { "X-Auth": md5(`${PASSWORD}_${timestamp}`) },
});

export const getIds = async (page) =>
  await api
    .post("/", {
      action: "get_ids",
      params: { offset: page * 10, limit: 10 },
    })
    .then((res) => res.data.result)
    .catch((err) => console.log(err?.message));

export const getItems = async (idsData) =>
  await api
    .post("/", {
      action: "get_items",
      params: { ids: idsData },
    })
    .then((res) => res.data.result)
    .catch((err) => console.log(err?.message));

export const getFields = async (field) => {
  return await api
    .post(`/`, {
      action: "get_fields",
      params: { field: field },
    })
    .then((res) => res.data.result)
    .catch((err) => console.log(err?.message));
};

export const filterItems = async (payload) => {
  return await api
    .post(`/`, {
      action: "filter",
      params: payload,
    })
    .then(async (getIds) => {
      return await api
        .post("/", {
          action: "get_items",
          params: { ids: getIds.data.result },
        })
        .then((res) => res.data.result)
        .catch((err) => console.log(err?.message));
    })
    .catch((err) => console.log(err?.message));
};
