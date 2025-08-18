import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const offered = menu.filter(item => item.category === "offered");
  return (
    <div className="max-w-screen-xl mx-auto">
      <title>Bistro Boss | Menu</title>
      {/* main cover */}
      <Cover img={menuImg} title={"Our Menu"} />
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} />
      {/* offered menu items */}
      <MenuCategory items={offered} title={"offered"} coverImg={dessertImg} />
      {/* desserts menu items */}
      <MenuCategory items={desserts} title={"dessert"} coverImg={dessertImg} />
      {/* pizza menu items */}
      <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg} />
      {/* soup menu items */}
      <MenuCategory items={soup} title={"soup"} coverImg={soupImg} />
      {/* salad menu items */}
      <MenuCategory items={salad} title={"salad"} coverImg={saladImg} />
    </div>
  );
};

export default Menu;