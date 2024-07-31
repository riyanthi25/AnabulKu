// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Grid, Text, Image } from "@mantine/core";

// const currentYear = new Date().getFullYear();

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/adopt", label: "Adopt" },
//   { to: "/breed", label: "Breed" },
//   { to: "/quiz", label: "Quiz" },
//   // add new link here!
// ];

// const socials = [
//   {
//     to: "https://www.instagram.com/riyanthi_ng",
//     label: "Instagram",
//     icon: "/src/assets/instagram.svg",
//   },
//   {
//     to: "https://wa.me/085737005452",
//     label: "WhatsApp",
//     icon: "/src/assets/whatsapp.svg",
//   },
//   {
//     to: "https://linkedin.com/in/putu-yoeliessya-riyanthi-b8264a280",
//     label: "LinkedIn",
//     icon: "/src/assets/linkedin.svg",
//   },
// ];

// export default function Footer() {
//   return (
//     <footer
//       style={{
//         backgroundColor: "#FFD0D0",
//         padding: "70px 0px 50px 0px",
//       }}
//     >
//       <Container size="xl">
//         <Grid>
//           <Grid.Col span={6}>
//             <nav
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 paddingBottom: "10px",
//                 gap: "2rem",
//               }}
//             >
//               {links.map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   style={{
//                     color: "black",
//                     textDecoration: "none",
//                   }}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>
//             <Text align="center" size="sm" color="black">
//               &copy; {currentYear} AnabulKu. All rights reserved.
//             </Text>
//           </Grid.Col>
//           <Grid.Col span={6}>
//             {socials.map((social) => (
//               <Link
//                 target="blank"
//                 key={social.to}
//                 to={social.to}
//                 style={{
//                   paddingRight: "60px",
//                   display: "inline-block",
//                   color: "whitesmoke",
//                 }}
//               >
//                 <Image src={social.icon} w={30} h={30} />
//               </Link>
//             ))}
//           </Grid.Col>
//         </Grid>
//       </Container>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Text, Image } from "@mantine/core";

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
];

export default function Footer() {
  return (
    <footer
      className="md:pt-0 pt-2 md:pb-4 pb-3"
      style={{
        backgroundColor: "#FFD0D0",
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
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
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
        <span className="block text-base sm:text-center">
          © {currentYear}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            AnabulKu™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
