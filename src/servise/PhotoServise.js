import { API_GET_PHOTOS_URL, API_PHOTOS_KEY } from "../constants/settings";
import {
  DEFAULT_PHOTOS_ORDER_BY,
  DEFAULT_PHOTOS_PAGE,
  DEFAULT_PHOTOS_PER_PAGE
} from "../constants/photo";
import { getParamsString } from "./utilits";

export default class PhotoServise {
  static getPhoto(data = {}) {
    const {
      page = DEFAULT_PHOTOS_PAGE,
      per_page = DEFAULT_PHOTOS_PER_PAGE,
      order_by = DEFAULT_PHOTOS_ORDER_BY
    } = data;

    const url = getParamsString(
      {
        client_id: API_PHOTOS_KEY,
        page,
        per_page,
        order_by
      },
      API_GET_PHOTOS_URL
    );

    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(images => {
        return images;
      })
      .catch(error => {
        return error;
      });
  }
}
