import axios from 'axios';
import md5 from 'md5';

const BASEURL = 'https://api.valantis.store:41000/';
const PASSWORD = 'Valantis';
const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');

const api = axios.create({
  baseURL: BASEURL,
  headers: { 'X-Auth': md5(`${PASSWORD}_${timestamp}`) },
});

export const requestIds = async (page) =>
  await api
    .post('/', {
      action: 'get_ids',
      params: { offset: page * 10, limit: 10 },
    })
    .then((res) => res.data.result);

export const requestItems = async (idsData) =>
  await api
    .post('/', {
      action: 'get_items',
      params: { ids: idsData },
    })
    .then((res) => res.data.result);

export const requestFields = async (field) => {
  return await api
    .post(`/`, {
      action: 'get_fields',
      params: { field: field },
    })
    .then((res) =>
      res.data.result.filter(
        (value, index, array) => array.indexOf(value) === index,
      ),
    );
};

export const requestFilterItems = async (payload) => {
  const filteredIds = await api
    .post(`/`, {
      action: 'filter',
      params: payload,
    })
    .then(async (response) => response.data.result);

  return await requestItems(filteredIds);
};
