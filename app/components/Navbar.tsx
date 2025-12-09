import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { MENU_APP } from "~/const/app";



export default function GlassNav() {
  return (
    <header className="w-full group backdrop-blur-xl duration-200 hover:bg-white/30 hover:border-b  border-white/20 fixed top-0 z-50">
      <nav className="max-w-5xl mx-auto h-[70px] group-hover:h-20 duration-300 flex items-center gap-6 px-6">
        {MENU_APP.map((item) => (
          <NavItem key={item.href} item={item} />
        ))}
      </nav>
    </header>
  );
}

function NavItem({ item }: any) {
  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        `relative px-3 py-1 text-[15px] font-medium transition-colors ${
          isActive ? "text-white" : "text-white/70 hover:text-white"
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
              className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-white"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </>
      )}
    </NavLink>
  );
}
