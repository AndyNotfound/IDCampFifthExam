import FavoriteRestaurant from '../../data/favorite-restaurant';

const Favorite = {
  async render() {
    return `
    <section id="article">
      <h2>Your Favorite Restaurant</h2>
      <!-- Start of the Article section -->
      <restaurant-list id="article-container" class="article-container">
        <!-- Injected from the DOM -->
      </restaurant-list>
      <!-- End of the Article section -->
    </section>
      `;
  },

  async afterRender() {
    const favoriteRestaurant = await FavoriteRestaurant.getAllRestaurants();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = favoriteRestaurant;
  },
};

export default Favorite;
