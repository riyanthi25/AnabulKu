import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Text, Image } from "@mantine/core";

const links = [
  { to: "/", label: "Home" },
  { to: "/adopt", label: "Adopt" },
  { to: "/breed", label: "Breed" },
  { to: "/quiz", label: "Quiz" },
  // add new link here!
];

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#3AA6B9",
        color: "#FFD0D0",
        padding: "23px",
        position: "sticky",
        top: 0,
        zIndex: 1000, // Ensure the navbar is above other content
      }}
    >
      <Container size="xl">
        <Grid justify="space-between">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/src/assets/hero-icon.svg"
              w={35}
              h={35}
              style={{ marginTop: "6px", marginRight: "9px" }}
            />

            <Grid.Col span={1}>
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
            </Grid.Col>
          </div>
          <Grid.Col span={3}>
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
          </Grid.Col>
          <Grid.Col
            span={3}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Link
              target="blank"
              style={{ marginRight: "20px" }}
              to="https://wa.me/085737005452"
            >
              <Image src="/src/assets/phone-call.png" w={25} h={25} />
            </Link>
          </Grid.Col>
        </Grid>
      </Container>
    </header>
  );
}
