import { useState } from "react";
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
        className="bg-[#FF9EAA] text-[#2b0806] md:pb-10"
        
      >
        <Center>
          <Title className="md:m-0 md:pt-8 md:px-0 px-6 pt-6 md:pb-0 pb-4 text-center" order={1}>
            Temukan Ras Anabulmu!
          </Title>
        </Center>
        <Container className="md:pt-8" size="xl">
          <Grid gutter="xl">
            {visibleCats.length !== 0 ? (
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
            <nav className="flex flex-wrap justify-center items-center space-x-1 md:px-0 px-8">
              <button
                onClick={() => pagination.setPage(1)}
                className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md mb-2 md:mb-0"
              >
                First
              </button>
              {Array.from({ length: totalCats }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => pagination.setPage(page)}
                    className={`px-3 py-1 mb-2 md:mb-0 ${
                      page === pagination.active
                        ? "bg-pink-600 text-white"
                        : "bg-gray-200 text-[#2b0806]"
                    } rounded-md`}
                  >
                    {page}
                  </button>
                )
              )}
            </nav>
          </Box>
        </Center>
      </Box>
    </>
  );
}
  