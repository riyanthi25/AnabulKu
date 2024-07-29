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
      style={{
        backgroundColor: "#FFD0D0",
        padding: "70px 0px 50px 0px",
      }}
    >
      <Container size="xl">
        <Grid>
          <Grid.Col span={6}>
            <nav
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "10px",
                gap: "2rem",
              }}
            >
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Text align="center" size="sm" color="black">
              &copy; {currentYear} AnabulKu. All rights reserved.
            </Text>
          </Grid.Col>
          <Grid.Col span={6}>
            {socials.map((social) => (
              <Link
                target="blank"
                key={social.to}
                to={social.to}
                style={{
                  paddingRight: "60px",
                  display: "inline-block",
                  color: "whitesmoke",
                }}
              >
                <Image src={social.icon} w={30} h={30} />
              </Link>
            ))}
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
}
