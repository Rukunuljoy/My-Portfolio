import React from "react";

const Contact = () => {
  return (
    <div name='contact'className="bg-gradient-to-b h-screen from-gray-900 via-black to-gray-800 p-4 w-full text-white md:h-screen">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
         
          <p className="py-6">Submit the from to get with me</p>
        </div>

        <div className="flex items-center justify-center">
          <form className="flex flex-col w-full md:w-1/2" action="https://getform.io/f/55634aa1-c17a-4b89-9dfa-3b86ebdc3da4" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 my-4 rounded-md text-white focus:outline-none"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <textarea name="message" id="" cols="" rows="10" className="p-2 bg-transparent my-4 border-2 rounded-md text-white focus:outline-none"/>
            <button className="text-white bg-gradient-to-b from-cyan-500 px-5 py-3my-8 mx-auto items-center rounded-md hover:scale-110 duration-500"> let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
