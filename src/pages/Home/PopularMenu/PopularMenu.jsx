import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular");
  return (
    <section className="mb-12 max-w-screen-xl mx-auto">
      <SectionTitle
        subHeading={"Popular items"}
        heading={"From our menu"}
      />
      <div className="grid md:grid-cols-2 gap-10">
        {
          popular.map(item => <MenuItem key={item._id} item={item} />)
        }
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-orange-400 border-0 border-b-4 hover:bg-black hover:text-white hover:border-black mt-2">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;