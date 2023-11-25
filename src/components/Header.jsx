import { Link, NavLink } from "react-router-dom";

function Header() {
  const activeLink =
    "from-primary to-gradient1 bg-gradient-to-r from-[3.08%] to-[93.85%] bg-clip-text text-transparent";

  return (
    <header className="flex items-center justify-between px-32 pb-7 pt-16">
      <Link to="/" className="z-50 font-clash text-4xl font-bold text-white">
        get<span className="text-secondary">linked</span>
      </Link>

      <section className="z-50 flex items-center gap-28 font-mont text-base font-normal text-white">
        <nav className="space-x-14 py-3">
          <NavLink
            onClick={() => {
              window.scrollIntoView({ behavior: "smooth" });
            }}
            to="#timeline"
            className={({ isActive }) => (isActive ? activeLink : "")}
          >
            Timeline
          </NavLink>

          <NavLink
            onClick={() => {
              window.scrollIntoView({ behavior: "smooth" });
            }}
            to="#overview"
            className={({ isActive }) => (isActive ? `${activeLink}` : "")}
          >
            Overview
          </NavLink>

          <NavLink
            onClick={() => {
              window.scrollIntoView({ behavior: "smooth" });
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

        <button className="rounded-[.25rem] bg-gradient-to-l from-primary from-0% via-gradient1 via-secondary via-[56.42%] via-[99.99%] to-gradient2 to-100% px-12 py-4">
          Register
        </button>
      </section>
    </header>
  );
}

export default Header;
