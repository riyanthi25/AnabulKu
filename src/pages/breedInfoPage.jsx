import { fetch_cats_api } from "../api";
import { Link, useLoaderData } from "react-router-dom";
import {
  Container,
  Card,
  Image,
  Text,
  Badge,
  Group,
  Grid, Button, Center
} from "@mantine/core";

export const loader = async () => {
  const cats = await fetch_cats_api("/images/search?has_breeds=true&limit=6");
  return cats;
};

export default function BreedInfoPage() {
  const cats = useLoaderData();
  console.log(cats);

  return (
    <>
      <div
        style={{
          backgroundColor: "#FF9EAA",
          color: "#2b0806",
          paddingBottom: "40px",
        }}
      >
        <Center>
          <h1 style={{ margin: "0px", paddingTop: "30px" }}>
            Temukan Ras Anabulmu!
          </h1>
        </Center>
        <Container size="xl" style={{ paddingTop: "30px" }}>
          <Grid gutter="xl">
            {cats.map((cat, index) => (
              <Grid.Col span={4} key={index}>
                <Card shadow="sm" padding="lg" radius="lg">
                  <Card.Section>
                    <Image height={400} src={cat.url} alt="" />
                  </Card.Section>
                  {cat.breeds.map((breed) => (
                    <>
                      <Group justify="space-between" mt="md" mb="xs">
                        <Text size="xl" mt="md" style={{ marginTop:"0px" }}>
                          {breed.name}
                        </Text>
                        <Badge color="pink">
                          Adaptability: {breed.adaptability}
                        </Badge>
                      </Group>
                      <Text style={{marginTop:"0px"}}>Origin: {breed.origin}</Text>
                      <Button color="#3AA6B9" mt="md" radius="md" component={Link} to="">
                        Lihat Detail...
                      </Button>
                    </>
                  ))}
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
