import { NavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
}

const baseClass =
  "border text-center py-2 mx-4 md:mx-5 px-6 md:px-10 rounded-b-md animate-all duration-500 bg-emerald-500 hover:bg-green-300 hover:text-black font-semibold";
const activeClass = "bg-green-300 text-black";

const navLinks: NavLinkProps[] = [
  { to: "/todos", label: "To Do" },
];

const Home = () => {
  return (
    <div className=" flex justify-center">
      {navLinks.map((link: NavLinkProps) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Home;