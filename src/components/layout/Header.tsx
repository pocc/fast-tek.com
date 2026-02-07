import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/books", label: "Books" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-brand-dark text-white">
      <div className="border-b border-white/10 py-2 text-center text-sm text-white/80">
        Call us for a free, no-obligation discussion of your sampling or remediation project:{" "}
        <a href="tel:5102322728" className="underline underline-offset-2">
          (510) 232-2728
        </a>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold tracking-wide">
          FAST-TEK
        </Link>
        <nav className="flex gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline hover:underline-offset-4"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
