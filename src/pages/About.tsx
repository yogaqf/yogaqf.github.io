import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Layout>
      <div>About</div>
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default About;
