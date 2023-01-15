import { Container } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useFilterStore } from "../../../utils/store";
import { pages } from "./pages";
import clsx from "clsx";

export const Navbar = () => {
  const {} = useFilterStore();

  return (
    <header className="z-50 sticky top-0 w-full bg-[#ff6600] flex items-center justify-center">
      <Container className="w-full p-2 !flex items-center justify-between">
        <Link to="/">
          <img src="/assets/hacker-news.png" className="w-8 h-8" />
        </Link>

        <div className="flex gap-2">
          {pages.map(({ name, href }) => (
            <NavLink
              key={name}
              to={href}
              className={({ isActive }) =>
                clsx(
                  "font-medium py-1 px-2 rounded-3xl",
                  isActive && "bg-white"
                )
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </Container>
    </header>
  );
};
