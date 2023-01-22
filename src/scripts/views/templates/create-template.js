/* eslint-disable new-cap */
/* eslint-disable max-len */
import API_ENDPOINT from '../../globals/api-endpoint';

const createDetailTemplate = (restaurant) => {
  return `
    <div id="article">
      <section id="restaurant">
        <div class="restaurant-image">
          <img
            src="${API_ENDPOINT.IMAGE.LARGE(restaurant.pictureId)}"
            alt="restaurant ${restaurant.name}"
          />
          <p class="restaurant-rate">Rating: ${restaurant.rating}</p>
        </div>
        <div class="restaurant-details">
          <h1 class="restaurant-name">${restaurant.name}</h1>
          <p class="restaurant-address">${restaurant.city}, ${restaurant.address}</p>
          <p class="restaurant-description">
            ${restaurant.description}
          </p>
          <div class="menu">
            <div class="food-menu">
              <h2 class="details-header">Food:</h2>
              <ul id="food" class="menu-item">
              </ul>
            </div>
            <div class="drink-menu">
              <h2 class="details-header">Drink:</h2>
              <ul id="drink" class="menu-item">
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="consumer-review">
        <h2 class="details-header">Constumer Review</h2>
        <div id="review-list">
        </div>
      </section>
    </div>
  `;
};

const createLikeButtonTemplate = () => {
  return `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;
};

const createLikedButtonTemplate = () => {
  return `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;
};

export {
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
