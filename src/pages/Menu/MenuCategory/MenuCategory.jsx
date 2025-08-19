import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-4">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {
          items.map(item => <MenuItem key={item._id} item={item} />)
        }
      </div>
      <div className="flex flex-col justify-between items-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-orange-400 border-0 border-b-4 hover:bg-black hover:text-white hover:border-black mt-2">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;