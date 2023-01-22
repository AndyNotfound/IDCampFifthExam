import RestaurantDataSource from '../../data/restaurant-data';
import '../elements/restaurant-list.js';

const Home = {
  async render() {
    return `
        <section id="hero">
            <!-- Start of the Hero section -->
            <img src="./image/hero-image_2.jpg" alt="" />
            <div class="hero-content">
            <header>We Serve The Best Dishes In town</header>
            <button>RSVP NOW!</button>
            </div>
            <!-- End of the Hero section -->
        </section>
        <section id="article">
            <h2>Explore Our Restaurant</h2>
            <!-- Start of the Article section -->
            <restaurant-list id="article-container" class="article-container">
              <!-- Injected from the DOM -->
            </restaurant-list>
            <!-- End of the Article section -->
        </section>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantDataSource.restaurantList();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = restaurant.restaurants;
  },
};

export default Home;
