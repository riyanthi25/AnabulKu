import React, { useState, useEffect } from "react";
import { SimpleGrid, Image, Button } from "@mantine/core";
import axios from "axios";

const CatGallery = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCats = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    setCats([...cats, ...response.data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "sm", cols: 1 },
          { maxWidth: "md", cols: 2 },
        ]}
      >
        {cats.map((cat) => (
          <Image src={cat.url} alt="Cat" key={cat.id} />
        ))}
      </SimpleGrid>
      <Button
        onClick={fetchCats}
        loading={loading}
        style={{ marginTop: "20px" }}
      >
        Load More Cats
      </Button>
    </div>
  );
};

export default CatGallery;
