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
  Box,
} from "@mantine/core";
import { usePagination } from "@mantine/hooks";
export const loader = async () => {
  try {
    const cat_breeds = await fetch_cats_api(`/breeds`);

    if (!Array.isArray(cat_breeds)) {
      throw new Error("Invalid data format for cat breeds");
    }

    const fetch_image = async (id) => {
      try {
        const response = await fetch_cats_api(`/images/${id}`);
        if (response && response.url) {
          return response.url;
        }
        throw new Error(`No URL found for image ID: ${id}`);
      } catch (error) {
        console.error("Image fetch error:", error);
        return "";
      }
    };

    const imagesUrlPromises = cat_breeds.map((cat) =>
      fetch_image(cat.reference_image_id)
    );
    const imageUrls = await Promise.all(imagesUrlPromises);

    return cat_breeds.map((cat, index) => ({
      ...cat,
      url: imageUrls[index],
    }));
  } catch (error) {
    console.error("Loader error:", error);
    return [];
  }
};

export default function BreedInfoPage() {
  const cats = useLoaderData();
  const catsPerPage = 8;
  const [visibleCats, setVisibleCats] = useState(cats.slice(0, catsPerPage));
  const totalCats = Math.ceil(cats.length / catsPerPage);
  const pagination = usePagination({
    total: totalCats,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * catsPerPage;
      const end = start + catsPerPage;

      setVisibleCats(cats.slice(start, end));
    },
  });

  return (
    <>
      <Box
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
            {visibleCats.length != 0 ? (
              visibleCats.map((cat) => (
                <Grid.Col span={{ sm: 6, md: 4, lg: 3 }} key={cat.id}>
                  <Card shadow="sm" padding="lg" radius="lg">
                    <Card.Section>
                      <Image
                        mah={{ sm: 300, md: 180 }}
                        fit="cover"
                        src={cat.url}
                        alt={cat.name}
                        fallbackSrc="https://placehold.co/600x400?text=couldn&#39;t%20load%20image"
                      />
                    </Card.Section>
                    <Text size="xl" mt={0} style={{ paddingTop: "15px" }}>
                      {cat.name}
                    </Text>
                    <Text mt={0}>Origin From: {cat.origin}</Text>
                    <Group
                      justify="flex-start"
                      mt="md"
                      mb="xs"
                      style={{ gap: "2px" }}
                    >
                      <Badge color="pink">Adaptation: {cat.adaptability}</Badge>
                      <Badge color="pink">Love: {cat.affection_level}</Badge>
                      <Badge color="pink">Social: {cat.social_needs}</Badge>
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
              ))
            ) : (
              <Grid.Col span={12}>TIdak ada data</Grid.Col>
            )}
          </Grid>
        </Container>
        <Center>
          <Box mt={"xl"}>
            <Pagination
              total={totalCats}
              withEdges
              size={"lg"}
              onChange={(range) => pagination.setPage(range)}
              onFirstPage={() => pagination.setPage(1)}
            />
          </Box>
        </Center>
      </Box>
    </>
  );
}
