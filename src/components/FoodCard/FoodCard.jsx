import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = food => {
    if (user && user.email) {
      // TODO: send cart item to the server
    } else {
      Swal.fire({
        title: "You are not logged in.",
        text: "Please login to add to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to login page
          navigate('/login', { state: { from: location } }); // Save the current location
        }
      });
    }
  }
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl" />
      </figure>
      <p className="text-white bg-slate-900 absolute right-0 mr-4 mt-4 p-3">{price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-orange-400 border-0 border-b-4 hover:bg-black hover:text-white hover:border-black">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;