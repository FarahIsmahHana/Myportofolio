import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="text-[#97d3dd] mr-[4.5rem] invisible sm:visible flex flex-col items-center gap-5 ">
      <a href="https://github.com/FarahIsmahHana" className="hover:text-white  duration-300 " target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/farah-ismah-hana-071922242/" className="hover:text-white  duration-300 " target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/hanafharaa/" className="hover:text-white  duration-300 " target="_blank">
        <BsInstagram />
      </a>
      <a className="rotate-90 mb-2 invisible lg:visible ">-----</a>
    </div>
  );
};

export default HeaderSocials;
