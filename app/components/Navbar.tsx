import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { MENU_APP } from "~/const/app";



export default function GlassNav() {
  return (
    <header className="w-full group backdrop-blur-xl duration-200 bg-white/20
     hover:border-b  border-white/20 fixed top-0 z-50">

      <nav className="max-w-5xl mx-auto h-[70px] group-hover:h-20 duration-300 flex items-center gap-6 px-6">
        <NavLink to="/" className="">
          <img
            className="h-[78px]"
            src="/logo.svg"
            alt="cc group supply logo" />
        </NavLink>
        {MENU_APP.map((item) => (
          <NavItem key={item.href} item={item} />
        ))}
      </nav>

      {/* panel */}
      <div className="absolute h-0 duration-700 group-hover:h-[80vh] w-full z-10 bg-black/30 backdrop-blur-3xl">
      
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
