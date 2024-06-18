import Mainimg from "../Images/4707122.jpg";
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
          <p className="text-xs md:text-sm md:font-semibold mb-10 w-full text-justify">
            Passionate and creative website designer skilled in HTML, CSS and
            JavaScript. Expert in crafting visually appealing, responsive
            websites with a focus on user experience. Dedicated to staying
            current with design trends and technologies, and committed to
            delivering high-quality, innovative web solutions.
          </p>
          <a
            className="text-base font-bold text-red-500 border-2 border-solid border-white rounded-md bg-black pl-3 pr-3 download-show"
            href={"/"}
            download
          >
            Hire me
          </a>
        </section>
        <section className="flex-col items-center justify-center hidden md:flex">
          <img
            className="w-3/5 img-shape bg-transparent rounded-full border-4	border-solid"
            style={{borderColor:'rgb(227,183,43)'}}
            src={Mainimg}
            alt="img"
          ></img>
        </section>
      </div>
  );
}
