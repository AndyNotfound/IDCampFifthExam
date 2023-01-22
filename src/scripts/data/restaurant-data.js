/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDataSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJSON = await response.json();
    return responseJSON;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantDataSource;
