import Mainimg from "../Images/4707122.jpg";
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
        <div className="w-1/5 flex items-center justify-end"><img src={Mainimg} alt="profile" width={200} className="rounded-2xl border-2 border-solid border-gray-500"></img></div>
        <div className="w-3/5 text-sm text-justify">Motivated and detail-oriented FullStack developer with hands-on 1 year experience in JavaScript, React.js, Node.js, Express.js, and Firebase. Demonstrated ability to develop and deploy custom web applications, with a focus on enhancing user experience and driving business objectives. Strong problem-solving skills and a collaborative mindset, with a passion for continuous learning and professional growth.</div>
      </div>
    </section>
  );
}
