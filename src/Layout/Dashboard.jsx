import { FaCalendar, FaComment, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto">
      {/* Dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 w-full">
          <li><NavLink to="/dashboard/home"><FaHome /> User Home</NavLink></li>
          <li><NavLink to="/dashboard/resarvation"><FaCalendar /> Reservation</NavLink></li>
          <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart</NavLink></li>
          <li><NavLink to="/dashboard/review"><FaComment /> Add Review</NavLink></li>
          <li><NavLink to="/dashboard/bookings"><FaList /> My Bookings</NavLink></li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;