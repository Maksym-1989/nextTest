import getCar from "../../api/api";
import axios from "axios";

const CarsCard = ({ posts }) => {
  console.log(posts);
  return <h1>Cars page</h1>;
};

// Cars.getInitialProps = async (ctx) => {
//   const options = {
//     API_KEY: "20689787-83a4953ee3875a5823ca1478f",
//     BASE_URL: "https://pixabay.com/api/",
//   };

//   const { API_KEY, BASE_URL } = options;

//   const fetchImages = async () => {
//     const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${API_KEY}`;

//     return await axios.get(url);
//   };

//   const img = await fetchImages();
//   console.log(img);

//   return { img };
// };

// export async function getStaticProps(context) {
//   const options = {
//     API_KEY: "20689787-83a4953ee3875a5823ca1478f",
//     BASE_URL: "https://pixabay.com/api/",
//   };

//   const { API_KEY, BASE_URL } = options;

//   const fetchImages = async () => {
//     const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${API_KEY}`;

//     return await axios.get(url);
//   };

//   const img = await fetchImages();
//   console.log(img);

//   return {
//     props: { img }, // will be passed to the page component as props
//   };
// }

// Cars.getInitialProps = async (ctx) => {
//   const API_KEY = "20689787-83a4953ee3875a5823ca1478f";
//   const BASE_URL = "https://pixabay.com/api/";

//   const posts = await axios.get(
//     `${BASE_URL}?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${API_KEY}`
//   );
//   return {
//     props: {
//       posts,
//     },
//   };
// };

export default CarsCard;
