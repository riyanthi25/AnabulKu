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
        <Container size="xl" className="md:pt-5 ">
          <Grid>
            <Grid.Col span={6}>
              <h3 className="font-extrabold md:flex md:justify-end md:pt-[70px] md:text-[40px] text-3xl"
              >
                WELCOME TO, AnabulKu
              </h3>
              <p className="text-2xl flex justify-center pt-2"
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
