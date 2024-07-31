import React from "react";
import { Grid, Container } from "@mantine/core";

function CatFact() {
  return (
    <div
      style={{
        backgroundColor: "#3AA6B9",
        color: "#2b0806",
        paddingBottom: "40px", paddingTop:"30px",
        marginTop: "-24px",
      }}
    >
      <Container size="xl" style={{ padding: "20px" }}>
        <Grid>
          <Grid.Col
            span={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h1 className="font-extrabold"
              style={{
                marginTop: "70px",
                fontStyle: "italic",
                fontSize: "50px",
              }}
            >
              CAT FACT!
            </h1>
          </Grid.Col>
          <Grid.Col span={6} style={{ paddingRight: "125px" }}>
            <h3 className="font-extrabold"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                fontSize: "35px",
              }}
            >
              KUCING - FELIS CATUS
            </h3>
            <p
              style={{
                fontSize: "18px",
                justifyContent: "flex-end",
                textAlign: "end",
                display: "flex",
              }}
            >
              Kucing adalah hewan mamalia karnivora dari keluarga Felidae. Nama
              ilmiahnya adalah Felis catus atau Felis silvestris catus. Kucing
              telah berbaur dengan kehidupan manusia selama lebih dari 9.500
              tahun dan sekarang merupakan salah satu hewan peliharaan paling
              populer di dunia.
            </p>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default CatFact;
