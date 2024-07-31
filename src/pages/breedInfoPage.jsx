import { useState, useEffect } from "react";
import { fetch_cats_api } from "../api";
import { Link, useLoaderData } from "react-router-dom";
import {
  Container,
  Card,
  Image,
  Text,
  Badge,
  Group,
  Grid,
  Button,
  Center,
  Title,
  Pagination,
} from "@mantine/core";

export const loader = async (page = 1, limit = 16) => {
  const cats = await fetch_cats_api(
    "/images/search?has_breeds=true&limit=100&order=ASC"
  );

  // Filter out to only have one image per breed
  const uniqueBreeds = [];
  const uniqueCats = cats.filter((cat) => {
    const breed = cat.breeds[0].id;
    if (!uniqueBreeds.includes(breed)) {
      uniqueBreeds.push(breed);
      return true;
    }
    return false;
  });

  // Return only 8 unique breed images
  return uniqueCats.slice(0, 16);
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
          <Title order={1} style={{ margin: "0px", paddingTop: "30px" }}>
            Temukan Ras Anabulmu!
          </Title>
        </Center>
        <Container size="xl" style={{ paddingTop: "30px" }}>
          <Grid gutter="xl">
            {cats.map((cat) => (
              <Grid.Col span={{ sm: 6, md: 4, lg: 3 }} key={cat.id}>
                <Card shadow="sm" padding="lg" radius="lg">
                  <Card.Section>
                    <Image
                      mah={{ sm: 300, md: 180 }}
                      fit="cover"
                      src={cat.url}
                      alt={cat.breeds[0].name}
                    />
                  </Card.Section>
                  <Text size="xl" mt={0} style={{ paddingTop: "15px" }}>
                    {cat.breeds[0].name}
                  </Text>
                  <Text mt={0}>Origin From: {cat.breeds[0].origin}</Text>
                  <Group
                    justify="flex-start"
                    mt="md"
                    mb="xs"
                    style={{ gap: "2px" }}
                  >
                    <Badge color="pink">
                      Adaptation: {cat.breeds[0].adaptability}
                    </Badge>
                    <Badge color="pink">
                      Love: {cat.breeds[0].affection_level}
                    </Badge>
                    <Badge color="pink">
                      Social: {cat.breeds[0].social_needs}
                    </Badge>
                  </Group>
                  <Button
                    color="#3AA6B9"
                    mt="md"
                    radius="md"
                    component={Link}
                    to=""
                  >
                    Lihat Detail...
                  </Button>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
        <Center>
          <Pagination total={10} style={{ paddingTop: "50px" }} />
        </Center>
      </div>
    </>
  );
}
