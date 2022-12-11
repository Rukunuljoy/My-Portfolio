import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutLineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "http://www.linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "http://www.github.com",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Mail <FaGithub size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 1,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/RUKUNUL JOY (RESUME).PDF",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id,child,href,style,download}) => (
          <li key={id} className={"flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-700" + "" + style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel=""
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
