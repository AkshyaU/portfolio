import "./App.css";
import Mainimg from "./Images/4707122.jpg";
import HeaderBar from "./Components/Header.jsx";
import Contact from "./Components/Contact.jsx";
import Skills from "./Components/Skills.jsx";

function App() {
  return (
    <div
      className="App w-full h-full bg-black opacity-90"
    >
      <HeaderBar />
      <div className="main-page w-full h-full flex items-center">
        <section className="flex flex-col items-start justify-center sm:pl-10 md:pl-24">
          <h1 className="text-2xl font-semibold">Hi,</h1>
          <h1 className="text-2xl font-semibold flex">
            I'm
            <h1 className="text-3xl font-semibold pl-3 text-red-500">
              Praveen
            </h1>
          </h1>
          <h1 className="text-4xl font-bold transform mb-3 w-fit">
            React Js Developer
          </h1>
          <p className="text-sm font-semibold w-2/4 mb-10 w-full">
            Passionate and creative website designer skilled in HTML, CSS and
            JavaScript. Expert in crafting visually appealing, responsive
            websites with a focus on user experience. Dedicated to staying
            current with design trends and technologies, and committed to
            delivering high-quality, innovative web solutions.
          </p>
          <a
            className="text-base font-semibold text-red-500 border-2 border-solid border-white rounded-md bg-transparent	pl-3 pr-3 download-show"
            href={"/"}
            download
          >
            CV Download
          </a>
        </section>
        <section className="flex flex-col items-center justify-center">
          <img
            className="w-3/5 img-shape bg-transparent"
            src={Mainimg}
            alt="img"
          ></img>
        </section>
      </div>
      <Skills/>
      <Contact />
    </div>
  );
}

export default App;
