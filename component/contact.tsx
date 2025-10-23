"use client";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
          Contact
        </h2>
      </div>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-stone-700 dark:text-stone-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="form-input mt-2 flex w-full rounded-lg border-stone-300 dark:border-stone-700 bg-background-light dark:bg-background-dark text-stone-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-base font-medium text-stone-700 dark:text-stone-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="form-input mt-2 flex w-full rounded-lg border-stone-300 dark:border-stone-700 bg-background-light dark:bg-background-dark text-stone-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-base font-medium text-stone-700 dark:text-stone-300"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="form-textarea mt-2 flex w-full rounded-lg border-stone-300 dark:border-stone-700 bg-background-light dark:bg-background-dark text-stone-900 dark:text-white focus:border-primary focus:ring-primary min-h-36 p-4"
            ></textarea>
          </div>

          <div className="flex justify-start">
            <button
              type="submit"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-black text-base font-bold transition-transform hover:scale-105"
            >
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>

      {/* Social Icons */}
      <div className="mt-16 flex justify-center gap-6">
        {/* Instagram */}
        <a
          href="#"
          className="flex flex-col items-center gap-2 group"
        >
          <div className="rounded-full bg-primary/20 dark:bg-primary/10 p-4 group-hover:bg-primary/30 dark:group-hover:bg-primary/20 transition-colors">
            <svg
              className="text-stone-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
            Instagram
          </p>
        </a>

        {/* WhatsApp */}
        <a
          href="#"
          className="flex flex-col items-center gap-2 group"
        >
          <div className="rounded-full bg-primary/20 dark:bg-primary/10 p-4 group-hover:bg-primary/30 dark:group-hover:bg-primary/20 transition-colors">
            <svg
              className="text-stone-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
            WhatsApp
          </p>
        </a>

        {/* Behance */}
        <a
          href="#"
          className="flex flex-col items-center gap-2 group"
        >
          <div className="rounded-full bg-primary/20 dark:bg-primary/10 p-4 group-hover:bg-primary/30 dark:group-hover:bg-primary/20 transition-colors">
            <svg
              className="text-stone-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm-24,78a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H90a38,38,0,0,1,25.65,66A42,42,0,0,1,136,158ZM40,116H90a22,22,0,0,0,0-44H40Zm80,42a26,26,0,0,0-26-26H40v52H94A26,26,0,0,0,120,158Zm128-6a8,8,0,0,1-8,8H169a32,32,0,0,0,56.59,11.2,8,8,0,0,1,12.8,9.61A48,48,0,1,1,248,152Zm-17-8a32,32,0,0,0-62,0Z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
            Behance
          </p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
