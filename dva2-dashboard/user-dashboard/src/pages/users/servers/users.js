import { PAGE_SIZE } from "../constants";
import request from "../../../utils/request";

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}

export const remove = id => {
  return request(`/api/users/${id}`, {
    method: "DELETE"
  });
};
export const patch = (id, values) => {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body:JSON.stringify(values),
  })
};

export const create = (values) => { 
  return request('/api/users', {
    method: 'POST',
    body:JSON.stringify(values)
  })
}