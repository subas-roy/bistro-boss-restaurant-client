import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <title>Bistro Boss | Home</title>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;