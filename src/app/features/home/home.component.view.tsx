import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBriefcase,
  faCode,
  faDownload,
  faEnvelope,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";

type HomeViewComponentProps = {
  handleEmailCopy: MouseEventHandler<HTMLButtonElement>;
  copied: boolean;
};

export default function HomeViewComponent({
  handleEmailCopy,
  copied,
}: HomeViewComponentProps) {
  return (
    <main className="w-full flex flex-col gap-10 bg-[var(--sand-color)]/20">
      <section
        className="grid grid-cols-2 p-10 bg-cover bg-center gap-15"
        style={{
          backgroundImage: `url(MainPage/background.png)`,
        }}
      >
        <div className="flex flex-col p-10">
          <label className="text-eyebrow uppercase">Hello I'm</label>
          <label className="text-hero">Aditi Rekhi</label>
          <label className="text-section-title">
            Full Stack Software Engineer
          </label>
          <span className="text-page-subtitle text-xl flex items-center gap-3">
            <label>Angular</label>
            <span className="w-2 h-2 bg-[var(--navy-color)] rounded-full"></span>
            <label>React</label>
            <span className="w-2 h-2 bg-[var(--navy-color)] rounded-full"></span>
            <label>Python/FastAPI</label>
            <span className="w-2 h-2 bg-[var(--navy-color)] rounded-full"></span>
            <label>PostgreSQL</label>
          </span>
          <p className="text-card-description mt-5">
            I build scalable web applicatins across analytics and fintech, with
            a focus on clean architecture, great user experiences, and
            real-world impact.
          </p>
          <div className="flex items-start gap-2 mt-5">
            <NavLink
              to="/experience"
              className="px-4 py-2 bg-[var(--navy-color)] rounded-lg text-button text-[var(--cream-color)] flex justify-center gap-2 items-center self-stretch"
            >
              <label>View My Work</label>
              <FontAwesomeIcon icon={faArrowRight} />
            </NavLink>
            <a
              href="/Files/Aditi_Rekhi.pdf"
              download="Aditi_Rekhi.pdf"
              className="px-4 py-2 rounded-lg text-button border-1 border-[var(--navy-color)] text-[var(--navy-color)] flex justify-center gap-2 items-center self-stretch"
            >
              <FontAwesomeIcon icon={faDownload} />
              <label>Download Resume</label>
            </a>
          </div>
          <div className="text-[var(--sand-color)] text-4xl flex gap-5 flex items-start mt-5">
            <a href="https://www.linkedin.com/in/aditi-rekhi/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/aditirekhi">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <button onClick={handleEmailCopy}>
              {copied ? (
                <label className="text-caption">Copied!</label>
              ) : (
                <FontAwesomeIcon icon={faEnvelope} />
              )}
            </button>
          </div>
        </div>
      </section>

      <section className="col-span-2 grid grid-cols-3 gap-10 px-10">
        <div className="bg-[var(--mist-color)]/50 shadow-lg/20 rounded-xl p-2">
          <img
            src="/MainPage/food-delivery-app.png"
            className="rounded-xl h-30 w-full object-cover object-top"
          />
          <span className="flex flex-col mt-2">
            <label className="text-card-title">Food Delivery Platform</label>
            <label className="text-card-description">
              Angular, FastAPI,PostgreSQL
            </label>
          </span>
        </div>

        <div className="bg-[var(--mist-color)]/50 shadow-lg/20 rounded-xl p-2">
          <img
            src="/MainPage/analytics-dashboard.png"
            className="rounded-xl h-30 w-full object-cover object-center"
          />
          <span className="flex flex-col mt-2">
            <label className="text-card-title">
              Real-time Analytics Dashboard
            </label>
            <label className="text-card-description">
              React, Tailwind CSS, AWS
            </label>
          </span>
        </div>

        <div className="bg-[var(--mist-color)]/50 shadow-lg/20 rounded-xl p-2">
          <img
            src="/MainPage/backend-services.png"
            className="rounded-xl h-30 w-full object-cover object-center"
          />
          <span className="flex flex-col mt-2">
            <label className="text-card-title">API / Backend Services</label>
            <label className="text-card-description">
              Python, FastAPI, Docker
            </label>
          </span>
        </div>
      </section>

      <section className="bg-[var(--sand-color)]/40 col-span-2 shadow-lg/20 flex gap-5 justify-around items-center p-5 rounded-lg mx-10 mb-10">
        <div className="flex gap-2 py-2">
          <span className="bg-[var(--blue-color)]/50 p-2 rounded-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-[var(--navy-color)] text-3xl"
            />
          </span>
          <span className="flex flex-col gap-1">
            <label className="text-card-title">5+</label>
            <label className="text-meta text-[var(--navy-color)]">
              Years Experience
            </label>
          </span>
        </div>

        <div className="border border-[var(--blue-color)] self-stretch"></div>

        <div className="flex gap-2 items-center py-2">
          <span className="bg-[var(--blue-color)]/50 p-2 rounded-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-[var(--navy-color)] text-3xl"
            />
          </span>
          <span className="flex flex-col gap-1">
            <label className="text-card-title">Enterprise Web Apps</label>
          </span>
        </div>

        <div className="border border-[var(--blue-color)] self-stretch"></div>

        <div className="flex gap-2 py-2">
          <span className="bg-[var(--blue-color)]/50 p-2 rounded-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCode}
              className="text-[var(--navy-color)] text-3xl"
            />
          </span>
          <span className="flex flex-col gap-1">
            <label className="text-card-title">Frontend + Backend</label>
            <label className="text-meta text-[var(--navy-color)]">
              End-to-end Solutions
            </label>
          </span>
        </div>
      </section>
    </main>
  );
}
