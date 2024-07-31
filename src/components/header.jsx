import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Text,
  Image,
  AppShell,
  Box,
  Burger,
  Group,
} from "@mantine/core";

const links = [
  { to: "/", label: "Home" },
  { to: "/adopt", label: "Adopt" },
  { to: "/breed", label: "Breed" },
  { to: "/quiz", label: "Quiz" },
  // add new link here!
];

export default function Header({ opened, toggle }) {
  return (
    <AppShell.Header
      style={{
        backgroundColor: "#3AA6B9",
        color: "#FFD0D0",
        padding: "23px",
        position: "sticky",
        border: "none",
        top: 0,
        zIndex: 1000, // Ensure the navbar is above other content
      }}
    >
      <Container size="xl">
        <Group justify="space-between">
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/src/assets/hero-icon.svg"
              w={35}
              h={35}
              style={{ marginRight: "9px" }}
            />

            <Text
              fw={700}
              size="xxl"
              weight={700}
              style={{
                fontSize: "1.50rem",
              }}
            >
              AnabulKu
            </Text>
          </Box>
          <Group visibleFrom="lg">
            <nav
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "6rem",
              }}
            >
              {links.map((link) => (
                <Link
                  key={link.to}
                  className="hover:opacity-20 transition duration-200"
                  to={link.to}
                  style={{
                    color: "#FFD0D0",
                    textDecoration: "none",
                    fontSize: "1.25rem",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Group>
          <Group
            style={{ display: "flex", justifyContent: "flex-end" }}
            visibleFrom="md"
          >
            <Link
              target="blank"
              style={{ marginRight: "20px" }}
              to="https://wa.me/085737005452"
            >
              <Image src="/src/assets/phone-call.png" w={25} h={25} />
            </Link>
          </Group>

          {/* Navbar khusus mobile - start */}
          <AppShell.Navbar hiddenFrom="md" className="bg-opacity-0 ">
            <Box
              style={{
                width: "100%",
                padding: "10px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                backgroundColor: "#3AA6B9",
              }}
              component="div"
            >
              {links.map((link) => (
                <Link
                  key={link.to}
                  className="hover:opacity-80 transition duration-200 bg-red-300 px-4 py-2 rounded-lg font-bold"
                  to={link.to}
                  style={{
                    color: "#2b0806",
                    textDecoration: "none",
                    fontSize: "1.25rem",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <Group>
                <Link
                  target="blank"
                  className="mt-6 border-2 border-gray-200 rounded-lg flex justify-center items-center gap-4 px-4 py-2 hover:bg-red-300 hover:border-red-300 duration-200 transition"
                  style={{ marginRight: "20px", color: "#2b0806" }}
                  to="https://wa.me/085737005452"
                >
                  <Image src="/src/assets/phone-call.png" w={16} />
                </Link>
              </Group>
            </Box>
          </AppShell.Navbar>
          {/* Navbar khusus mobile - end */}

          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        </Group>
      </Container>
    </AppShell.Header>
  );
}
