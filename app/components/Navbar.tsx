import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { MENU_APP } from "~/const/app";
import { VscThreeBars } from "react-icons/vsc";



export default function GlassNav() {
  return (
    <header
      className="
    fixed top-0 z-50 w-full
    backdrop-blur-3xl bg-black/20
    border-b border-white/10
    duration-200
    group
  "
    >
      <nav className="container-x mx-auto h-[70px] flex items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/">
          <img
            className="h-[72px]"
            src="/logo.svg"
            alt="cc group supply logo"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {MENU_APP.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </div>

        {/* Hamburger */}
        <button className="lg:hidden text-white text-2xl">
          <VscThreeBars />
        </button>
      </nav>

      {/* Dropdown / Panel */}
      <div
        className="
      absolute top-full left-0 w-full
      h-0 overflow-hidden
      bg-black/80 backdrop-blur-3xl
      duration-500
      group-hover:h-[80vh]
    "
      >
        {/* mobile menu here */}
      </div>
    </header>

  );
}

function NavItem({ item }: any) {
  return (

    <NavLink
      to={item.href}
      className={({ isActive }) =>
        `relative px-3 py-1 text-[15px] font-medium 
       transition-all ${isActive ? "text-white " : "text-white/70 hover:text-white hover:border-white hover:border-b-3"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {item.label}

          {/* Hover / Active underline */}
          {(isActive) && (
            <motion.div
              layoutId="nav-underline"
              className="absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-white"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </>
      )}


    </NavLink>
  );
}
