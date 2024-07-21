import Mainimg from "../Images/girl.image.jpeg";
export default function About() {
  return (
    <section className="w-full h-full mt-5 flex flex-col" id="about">
      <div className="flex items-center justify-evenly">
        <hr className="w-3/5" />
        <p className="text-base md:text-2xl font-semibold text-center pl-4 pr-4">
          About
        </p>
        <hr className="w-3/5" />
      </div>
      <div className="flex items-center justify-evenly mt-10 mb-10">
        <div className="w-1/5 flex items-center">
          <img
            src={Mainimg}
            alt="profile"
            width={200}
            className="rounded-2xl border-2 border-solid border-gray-500"
          ></img>
        </div>
        <div className="w-3/5 text-xs md:text-sm text-justify">
          Motivated and detail-oriented Frontend Developer with hands-on
          expertise in Figma, Adobe Creative Suite, HTML, Tailwind CSS,
          JavaScript, and React.js. Demonstrated ability to create
          pixel-perfect, responsive designs and develop custom web applications
          that enhance user experience and drive business objectives. Strong
          problem-solving skills and a collaborative mindset, with a passion for
          continuous learning and professional growth.
        </div>
      </div>
    </section>
  );
}
