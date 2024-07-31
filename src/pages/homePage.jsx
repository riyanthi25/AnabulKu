import React from "react";
import { Grid, Container, Image } from "@mantine/core";
import AboutUs from "../layout/home/aboutUs";
import CatFact from "../layout/home/catFact";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#3AA6B9",
          color: "#2b0806",
        }}
      >
        <Container size="xl" style={{ paddingTop: "20px" }}>
          <Grid>
            <Grid.Col span={6}>
              <h3 className="font-extrabold"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "40px",
                  fontSize: "40px",
                }}
              >
                WELCOME TO, AnabulKu
              </h3>
              <p
                style={{
                  fontSize: "25px",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                here's all about your 'anabul'. . .
              </p>
            </Grid.Col>
            <Grid.Col
              span={6}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingLeft: "150px",
              }}
            >
              <Image
                src="/src/assets/cat-love.png"
                w={300}
                h={300}
                style={{ justify: "flex-start" }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <AboutUs/>
      <CatFact/>
      
    </>
  );
};

export default HomePage;
