import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function NavbarViewComponent() {
  return (
    <main className="w-full flex px-5 py-2 justify-between items-centers sticky">
      <img src="Logo/logo-small.png" className="w-15 h-auto" />
      <section className="flex gap-10 text-[var(--navy-color)] text-nav items-center">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-[var(--navy-color)]" : "border-none"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutMe"
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-[var(--navy-color)]" : "border-none"}`
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-[var(--navy-color)]" : "border-none"}`
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-[var(--navy-color)]" : "border-none"}`
          }
        >
          Experience
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-[var(--navy-color)]" : "border-none"}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-[var(--navy-color)]" : "border-none"}`
          }
        >
          Resume
        </NavLink>
      </section>
      <NavLink
        to="/letsConnect"
        className="text-nav button-text px-4 py-2 rounded-3xl bg-[var(--navy-color)] text-[var(--cream-color)] flex gap-2 items-center"
      >
        Let's Connect
        <FontAwesomeIcon icon={faArrowRight} />
      </NavLink>
    </main>
  );
}
