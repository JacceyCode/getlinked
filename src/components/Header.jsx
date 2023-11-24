/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

function Header({ faqRef, overviewRef }) {
  const activeLink =
    "from-primary to-gradient1 bg-gradient-to-r from-[3.08%] to-[93.85%] bg-clip-text text-transparent";

  return (
    <header className="flex items-center justify-between px-32 pb-7 pt-16">
      <Link to="/" className="font-clash z-50 text-4xl font-bold text-white">
        get<span className="text-secondary">linked</span>
      </Link>

      <section className="font-mont z-50 flex items-center gap-28 text-base font-normal text-white">
        <nav className="space-x-14 py-3">
          <NavLink
            to="#timeline"
            className={({ isActive }) => (isActive ? activeLink : "")}
          >
            Timeline
          </NavLink>

          <NavLink
            onClick={() => {
              overviewRef.scrollIntoView({ behavior: "smooth" });
            }}
            to="#overview"
            className={({ isActive }) => (isActive ? `${activeLink}` : "")}
          >
            Overview
          </NavLink>

          <NavLink
            onClick={() => {
              faqRef.scrollIntoView({ behavior: "smooth" });
            }}
            to="#faq"
            className={({ isActive }) => (isActive ? activeLink : "")}
          >
            FAQs
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : "")}
          >
            Contact
          </NavLink>
        </nav>

        <button className="from-primary via-secondary via-gradient1 to-gradient2 rounded-[.25rem] bg-gradient-to-l from-0% via-[56.42%] via-[99.99%] to-100% px-12 py-4">
          Register
        </button>
      </section>
    </header>
  );
}

export default Header;
