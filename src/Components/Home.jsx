import Mainimg from "../Images/4707122.jpg";
import resume from "../Images/Praveen_Resume.pdf";
import gitlogo from "../Images/pngegg.png";
import linkedin from "../Images/linkedin-logo-png-2048.png";
import twitter from "../Images/Twitter-X-White-Logo-PNG.png";
import gmail from "../Images/Gmail_Logo_White_128px.png";
export default function Home() {
  return (
    <div className="main-page w-full h-full flex items-center">
      <section className="flex flex-col items-start justify-center pl-10 pr-10 md:pr-0 md:pl-24 w-full">
        <h1 className="md:text-2xl font-semibold">Hi,</h1>
        <h1 className="md:text-2xl font-semibold flex">
          I'm
          <h1 className="md:text-3xl font-semibold pl-3 text-red-500">
            Praveen
          </h1>
        </h1>
        <h1 className="text-lg md:text-4xl font-bold transform mb-3 w-fit">
          MERN Stack Developer
        </h1>
        <p className="text-xs md:text-sm md:font-semibold mb-5 w-full text-justify">
          Passionate and creative website designer skilled in HTML, CSS and
          JavaScript. Expert in crafting visually appealing, responsive websites
          with a focus on user experience. Dedicated to staying current with
          design trends and technologies, and committed to delivering
          high-quality, innovative web solutions.
        </p>
        <div className="flex items-center justify-between mb-5 md:w-2/5 w-4/5">
          <a
            href="https://github.com/PRAVEEN-hub2001"
            target="_blank"
            rel="noreferrer"
            className="p-1 bg-gray-700 rounded-full hover:scale-110 projects ease-in duration-300"
          >
            <img className="w-6 md:w-8" src={gitlogo} width={30} alt="git-logo"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/praveeneswaran"
            target="_blank"
            rel="noreferrer"
            className="p-1 bg-gray-700 rounded-full hover:scale-110 projects ease-in duration-300"
          >
            <img className="w-6 md:w-8" src={linkedin} width={30} alt="linkdein-logo"></img>
          </a>
          <a
            href="https://x.com/Praveeneswaran2"
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-gray-700 rounded-full h-full hover:scale-110 projects ease-in duration-300"
          >
            <img className="w-5 md:w-6" src={twitter} width={20} alt="twitter-logo"></img>
          </a>
          <a
            href="mailto:praveeneswaran31@gmail.com"
            className="p-2 bg-gray-700 rounded-full h-full hover:scale-110 projects ease-in duration-300"
          >
            <img className="w-6 md:w-8" src={gmail} width={25} alt="gmail-logo"></img>
          </a>
        </div>
        <a
          className="text-base font-bold text-red-500 border border-solid border-white rounded-2xl bg-black pl-3 pr-3 download-show"
          href={resume}
          download
        >
          Download CV
        </a>
      </section>
      <section className="flex-col items-center justify-center hidden md:flex">
        <img
          className="w-3/5 img-shape bg-transparent rounded-full border-4	border-solid"
          style={{ borderColor: "rgb(227,183,43)" }}
          src={Mainimg}
          alt="img"
        ></img>
      </section>
    </div>
  );
}
