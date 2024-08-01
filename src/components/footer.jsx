import React from "react";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const links = [
  { to: "/", label: "Home" },
  { to: "/adopt", label: "Adopt" },
  { to: "/breed", label: "Breed" },
  { to: "/quiz", label: "Quiz" },
  // add new link here!
];

const socials = [
  {
    to: "https://www.instagram.com/riyanthi_ng",
    label: "Instagram",
    icon: "/src/assets/instagram.svg",
  },
  {
    to: "https://wa.me/085737005452",
    label: "WhatsApp",
    icon: "/src/assets/whatsapp.svg",
  },
  {
    to: "https://linkedin.com/in/putu-yoeliessya-riyanthi-b8264a280",
    label: "LinkedIn",
    icon: "/src/assets/linkedin.svg",
  },
  {
    to: "https://github.com/riyanthi25",
    label: "Github",
    icon: "/src/assets/github.svg",
  },
  {
    to: "https://discordapp.com/users/873507001404112926",
    label: "Discord",
    icon: "/src/assets/discord.svg",
  },
];

export default function Footer() {
  return (
    <footer
      className="md:pt-0 pt-2 md:pb-4 pb-3"
      style={{
        backgroundColor: "#FFD0D0",
        color: "#2b0806",
      }}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/src/assets/hero-icon.svg"
              className="h-10 md:mb-3"
              alt="anabulku logo"
            />
            <span className="self-center text-[1.5rem] font-semibold whitespace-nowrap">
              AnabulKu
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-base font-medium sm:mb-0">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:underline me-4 md:me-6">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center ">
            © {currentYear}{" "}
            <a href="/" class="hover:underline">
              AnabulKu
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 md:mr-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.to}
                className="ms-5 "
              >
                <img src={social.icon} alt={social.label} className="md:w-6 w-5 md:h-6" />
                <span className="sr-only ">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
