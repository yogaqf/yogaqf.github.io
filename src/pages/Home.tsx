import Layout from "@/components/Layout";
import { ModeToggle } from "@/components/mode-toggle";

const Home = () => {
  return (
    <Layout>
      <div>Home</div>
      <div className="grid grid-cols-3 gap-4">
        <ModeToggle />
      </div>
    </Layout>
  );
};

export default Home;
