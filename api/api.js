import axios from "axios";

const getCar = async () => {
  const options = {
    method: "GET",
    url: "https://car-data.p.rapidapi.com/cars/types",
    headers: {
      "x-rapidapi-host": "car-data.p.rapidapi.com",
      "x-rapidapi-key": "a48e1971cfmsh4350e5c0e906cd8p13b242jsnd5f4640e2ff7",
    },
  };
  try {
    const cars = await axios.request(options);
    console.log(cars);
    return cars;
  } catch (error) {
    console.log(error.message);
  }
};
export default getCar;
