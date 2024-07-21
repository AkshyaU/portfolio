import mavrick_labels from "../Images/mavrick_labels.jpeg";
import login_register from "../Images/Screenshot 2024-06-18 074711.png";
import { Fade } from "react-awesome-reveal";

export default function Project() {
  return (
    <section className="w-full h-full mb-10 pt-10 flex flex-col" id="project">
      <div className="flex items-center justify-evenly">
        <hr className="w-2/5" />
        <p className="text-base md:text-2xl font-semibold text-center pl-4 pr-4">
          Latest Project
        </p>
        <hr className="w-2/5" />
      </div>
      <Fade direction="left" duration={1000}>
        <div className="flex items-center justify-evenly">
          <div className="md:w-3/5 w-4/5 text-sm p-5 md:ml-10 mt-5 mb-5 flex items-center bg-gray-950 rounded-3xl ease-in duration-300 hover:scale-95 projects">
            <div>
              <h1 className="md:text-lg text-end font-semibold">
                SelDirect Application
              </h1>
              <p className="text-justify text-xs md:text-base">
                Designed and developed an affiliate program feature for an
                e-commerce application, enabling customers to become affiliates
                and earn commissions and rewards based on orders.
              </p>
            </div>
            <div className="pl-5"></div>
          </div>
          <div className="w-2/5 hidden md:block"></div>
        </div>
      </Fade>
      <Fade direction="right" duration={1000}>
        <div className="flex items-center justify-evenly">
          <div className="w-2/5 hidden md:block"></div>
          <div className="md:w-3/5 w-4/5 text-sm p-5 md:mr-10 flex items-center bg-gray-950 rounded-3xl ease-in duration-300 hover:scale-95 projects">
            <div className="pr-5">
              <img
                className="rounded-lg border-2 border-solid border-gray-500"
                src={mavrick_labels}
                width={700}
                alt="freeshipping"
              ></img>
            </div>
            <div>
              <h1 className="md:text-lg font-semibold">Mavweick Labels</h1>
              <p className="text-justify text-xs md:text-base">
                Developed a static HTML page for the Mavweick labels project,
                ensuring seamless compatibility and visual appeal. Contributed
                expertise in frontend development to support project objectives
                and client requirements effectively.
              </p>
              <a
                href="https://maverick-labels.onrender.com/"
                target="_blank"
                className="flex text-gray-500"
                rel="noreferrer"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
                  transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
                      stroke="#6B7280"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="pl-1 text-xs md:text-base">
                  https://maverick-labels.onrender.com/
                </p>
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade direction="left" duration={1000}>
        <div className="flex items-center justify-evenly">
          <div className="md:w-3/5 w-4/5 text-sm p-5 md:ml-10 mt-5 mb-5 flex items-center bg-gray-950 rounded-3xl ease-in duration-300 hover:scale-95 projects">
            <div>
              <h1 className="md:text-lg text-end font-semibold">LifeScience</h1>
              <p className="text-justify text-xs md:text-base">
                Developed a responsive homepage for a Lifescience project using
                HTML, CSS, and JavaScript. Ensured cross-browser compatibility
                and optimized performance for various devices. Collaborated with
                backend developers for seamless integration and utilized Git for
                version control.
              </p>
              <a
                href="https://lifescience.onrender.com/"
                target="_blank"
                className="flex text-gray-500"
                rel="noreferrer"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
                  transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
                      stroke="#6B7280"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="pl-1 text-xs md:text-base">
                  https://lifescience.onrender.com/
                </p>
              </a>
            </div>
          </div>
          <div className="w-2/5 hidden md:block"></div>
        </div>
      </Fade>
      <Fade direction="right" duration={1000}>
        <div className="flex items-center justify-evenly">
          <div className="w-2/5 hidden md:block"></div>
          <div className="w-4/5 md:w-3/5 text-sm p-5 md:mr-10 flex items-center bg-gray-950 rounded-3xl ease-in duration-300 hover:scale-95 projects">
            <div>
              <h1 className="md:text-lg font-semibold">Norwex</h1>
              <p className="text-justify text-xs md:text-base">
                Developed a “Shopify app” focused on referral and rewards
                functionalities, Implemented role-specific features for
                consultants and customers to enhance engagement and drive sales.
                Contributed to increased brand loyalty and revenue growth
                through seamless integration and structured referral system.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
