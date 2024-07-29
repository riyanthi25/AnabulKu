const API_KEY =
  "live_UavO8APr6ZJbca8CSxOdYZCzilCA77u7EqJoxvaCplbK1PEHD5GZ9HcwnUAr3OCw";
const BASE_URL = "https://api.thecatapi.com/v1";

// Fetch breeds
export const fetchBreeds = async () => {
  const response = await fetch(`${BASE_URL}/breeds`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  const data = await response.json();
  return data;
};

// Fetch images
export const fetchImages3 = async () => {
  const response = await fetch(`${BASE_URL}/images/search?limit=3`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  const data = await response.json();
  return data;
};

// Fetch breeds and images together
// export const fetchCatsData = async () => {
//   const [breeds, images] = await Promise.all([fetchBreeds(), fetchImages()]);

//   // Match images with breeds
//   const catData = images.map((image) => {
//     const breed = breeds.find((breed) => breed.reference_image_id === image.id);
//     return {
//       ...image,
//       name: breed ? breed.name : "Unknown Breed",
//       description: breed ? breed.description : "No description available.",
//     };
//   });

//   return catData;
// };
