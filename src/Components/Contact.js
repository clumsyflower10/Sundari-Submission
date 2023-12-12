import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-[rgb(137,141,88)] p-4 text-black"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          {" "}
          {/* Center the text within the div */}
          <p className="text-4xl font-bold text-yellow-400">Contact</p>
          <p className="py-2 ml-1 font-bold text-green-900">Ask us anything</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/c3660590-3ffc-49cc-a916-2eedf4fdf809"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Enter your message here"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            ></textarea>

            <button className="text-green-900 font-bold bg-yellow-400 px-4 py-2 my-6 mx-auto flex item-center rounded-md hover:scale-11- duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
