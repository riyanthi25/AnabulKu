import React from "react";
import { Center, Container, Grid, Image } from "@mantine/core";

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
        <h1
          style={{
            fontSize: "40px",
          }}
        >
          TENTANG KAMI
        </h1>
      </Center>
      <Container size="xl" style={{ padding: "20px" }}>
        <Grid>
          <Grid.Col
            span={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src="/src/assets/angry-cat.svg" w={100} h={100} />
            <h1
              style={{
                marginTop: "5px",
                marginBottom: "10px",
                fontStyle: "italic",
                fontSize: "20px",
              }}
            >
              Tampilan yang memanjakan mata dan user friendly
            </h1>
          </Grid.Col>
          <Grid.Col
            span={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src="/src/assets/mood-cat.svg" w={100} h={100} />
            <h1
              style={{
                marginTop: "5px",
                fontStyle: "italic",
                marginBottom: "10px",
                fontSize: "20px",
              }}
            >
              Menyediakan informasi lengkap mengenai dunia kucing
            </h1>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutUs;
