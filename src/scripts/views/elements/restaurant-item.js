/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../../globals/api-endpoint';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    return this.innerHTML = `
    <img src="${API_ENDPOINT.IMAGE.MEDIUM(this._restaurant.pictureId)}" alt="${
  this._restaurant.name} restaurant">
    <div class="city"><p>${this._restaurant.city}</p></div>
    <div class="detail">
        <p class="rating">Rating : ${this._restaurant.rating}</p>
        <a href="#/detail/${this._restaurant.id}" class="tittle">
          ${this._restaurant.name}
        </a>
        <p class="desc">${this._restaurant.description}</p>
    </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
