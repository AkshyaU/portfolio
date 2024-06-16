import { useState } from "react";


export default function Contact() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [message,setMessage]=useState('');
  return (
    <section className="w-full h-full mt-5 flex flex-col" id="contact">
      <div className="flex items-center justify-evenly">
        <hr className="w-3/5" />
        <p className="md:w-1/5 w-3/5 text-lg md:text-2xl font-semibold text-center">
          Contact me
        </p>
        <hr className="w-3/5" />
      </div>
      <div className="flex items-center justify-center flex-col w-full mt-2 mb-10">
        <form
          className="flex items-center justify-center flex-col md:w-2/4 w-11/12 border border-solid border-white pt-2 pb-5 rounded-xl"
          method="post"
        >
          <h2 className="mb-1 italic font-semibold">Get in touch</h2>
          <div className="input-wrapper w-full flex items-center justify-center">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" value={name} required />
          </div>
          <div className="input-wrapper w-full flex items-center justify-center">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" value={email} required />
          </div>
          <div className="input-wrapper w-full flex items-center justify-center">
            <label for="email">Your Subject</label>
            <input type="text" id="subject" name="subject" value={subject} required />
          </div>
          <div className="input-wrapper w-full flex items-center justify-center">
            <label for="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              rows={4}
              cols={15}
            ></textarea>
          </div>
          <button className="pl-5 pr-5 p-1 rounded-lg italic font-bold border border-solid border-gray hover:bg-gray-950" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
