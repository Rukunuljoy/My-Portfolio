import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          As part of the corporate marketing team, we are looking for a
          Front-end Developer Intern. The intern will contribute significantly
          to channels such as the website while also managing multiple
          concurrent projects in the development of custom web applications for
          the marketing team. We are looking for someone who is eager to learn,
          flexible, a self-starter, and enthusiastic about working in a growing
          technology company with a diverse set of internal and external
          stakeholders.
        </p>
        <br />

        <p className="text-xl ">
          The developer is responsible for designing and implementing new
          features, bug fixes, and enhancing existing code. Participate in
          cross-functional teamwork such as code-review, documentation, and
          defining specification. Experience in developing with C++ & MySQL.
        </p>
      </div>
    </div>
  );
};

export default About;
