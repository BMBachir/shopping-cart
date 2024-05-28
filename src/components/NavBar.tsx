import { Badge } from "react-bootstrap";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm ">
      <Link className="flex items-center gap-2" to={"/"}>
        <span className="text-lg font-semibold">E-shop</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link className="text-gray-600 hover:text-gray-900 " to={"/"}>
          Home
        </Link>
        <Link className="text-gray-600 hover:text-gray-900 " to={"/store"}>
          Store
        </Link>
      </nav>
      <Link className="relative" to={"/"}>
        <RiShoppingCart2Line className="h-6 w-6 text-gray-600 hover:text-gray-900 " />
        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white px-1.5 py-0.5 text-xs rounded-full">
          3
        </Badge>
      </Link>
    </header>
  );
};

export default NavBar;
