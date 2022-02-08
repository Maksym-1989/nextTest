import axios from "axios";
import CarsCard from "../../component/cars/CarsCard";
import Layout from "../../component/layout/Layout";

const Cars = ({ posts }) => {
  return (
    <Layout>
      <CarsCard posts={posts} />
    </Layout>
  );
};

export async function getStaticProps() {
  const API_KEY = "20689787-83a4953ee3875a5823ca1478f";
  const BASE_URL = "https://pixabay.com/api/";

  //   const posts = await axios.get(
  //     `${BASE_URL}?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${API_KEY}`
  //   );
  const posts = [];

  return {
    props: {
      posts,
    },
  };
}
export default Cars;
