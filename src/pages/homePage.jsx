import React from "react";
import { useLoaderData } from "react-router-dom";
import { Grid, Loader, Container, Image } from "@mantine/core";
import CatCard from "../components/catCard";
import { fetchImages3 } from "../api";

// Loader function to fetch data
export const loader = async () => {
  const cats = await fetchImages3();
  return cats;
};

const HomePage = () => {
  const cats = useLoaderData(); // Use the data fetched by the loader

  if (!cats) {
    return <Loader />;
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#3AA6B9",
          color: "#fff",
          // paddingBottom: "40px",
        }}
      >
        <Container size="xl" style={{ paddingTop: "20px" }}>
          <Grid>
            <Grid.Col span={6}>
              <h3
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
                  marginTop: "-35px",
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
      <div
        style={{
          backgroundColor: "#FF9EAA",
          color: "#fff",
          paddingBottom: "80npmpx",
          marginTop: "-24px",
        }}
      >
        <Container size="xl" style={{ padding: "20px" }}>
          <Grid>
            <Grid.Col span={6}><h1>akfhueafygeygcg</h1></Grid.Col>
            <Grid.Col span={6} style={{paddingRight:"110px" }}>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "40px",
                }}
              >
                KUCING - FELIS CATUS
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  margin: "0px",
                  justifyContent: "flex-end",
                  textAlign: "end",
                  display: "flex",
                  marginTop: "-35px",
                }}
              >
                Kucing adalah hewan mamalia karnivora dari keluarga Felidae.
                Nama ilmiahnya adalah Felis catus atau Felis silvestris catus.
                Kucing telah berbaur dengan kehidupan manusia selama lebih dari
                9.500 tahun dan sekarang merupakan salah satu hewan peliharaan
                paling populer di dunia.
              </p>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#3AA6B9",
          color: "#fff",
          paddingBottom: "30px",
          marginTop: "-24px",
        }}
      >
        <Container size="xl" style={{ padding: "40px" }}>
          <Grid>
            {cats.map((cat) => (
              <Grid.Col
                span={4}
                key={cat.id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CatCard cat={cat} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
