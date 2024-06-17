import { useState } from "react";

export default function About() {
  return (
    <section className="w-full h-full mt-5 flex flex-col" id="contact">
      <div className="flex items-center justify-evenly">
        <hr className="w-3/5" />
        <p className="text-base md:text-2xl font-semibold text-center pl-4 pr-4">
          About
        </p>
        <hr className="w-3/5" />
      </div>
    </section>
  );
}
