
const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
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
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;