const API_KEY =
  "live_UavO8APr6ZJbca8CSxOdYZCzilCA77u7EqJoxvaCplbK1PEHD5GZ9HcwnUAr3OCw";
const BASE_URL = "https://api.thecatapi.com/v1";

export const fetch_cats_api = async (url) => {
  const response = await fetch(BASE_URL + url, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  const data = await response.json();
  return data;
};

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
