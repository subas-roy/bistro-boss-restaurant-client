import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu.jsx"

const Menu = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <title>Bistro Boss | Menu</title>
      <Cover img={menuImg} title={"Our Menu"}/>
    </div>
  );
};

export default Menu;