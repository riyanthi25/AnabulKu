import React from "react";
import { Center, Container, Grid, Image, Box } from "@mantine/core";

function AboutUs() {
  return (
    <div
      style={{
        backgroundColor: "#FF9EAA",
        color: "#2b0806",
        paddingBottom: "30px",
        marginTop: "-24px",
      }}
    >
      <Center>
        <h1 className="font-extrabold"
          style={{
            fontSize: "40px",
            margin: "0px",
            paddingTop: "30px",paddingBottom:"23px"
          }}
        >
          LELAH? REFRESHING BENTAR YUK!
        </h1>
      </Center>
      <Container size="xl" style={{ marginTop: "0px", marginBottom:"25px" }}>
        <Grid>
          <Grid.Col
            span={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src="/src/assets/mood-cat.svg" w={100} h={100} />
            <Center>
              <Box style={{ fontSize: "22px", paddingLeft: "10px" }}>
                Lihat berbagai ras kucing
              </Box>
            </Center>
          </Grid.Col>
          <Grid.Col
            span={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src="/src/assets/hero-icon.svg" w={95} h={95} />
            <Center>
              <Box style={{ fontSize: "22px", paddingLeft: "10px" }}>
                Adopsi anabul pilihan kamu
              </Box>
            </Center>
          </Grid.Col>
          <Grid.Col
            span={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src="/src/assets/shout-cat.svg" w={100} h={100} />
            <Center>
              <Box style={{ fontSize: "22px", paddingLeft: "10px" }}>
                Quiz seru tentang anabul
              </Box>
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutUs;
// 