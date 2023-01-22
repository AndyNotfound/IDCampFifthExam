/* eslint-disable require-jsdoc */
import './restaurant-item.js';

class RestaurantsList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = ``;
    this._restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('restaurant-item');
      restaurantElement.restaurant = restaurant;

      this.appendChild(restaurantElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantsList);
