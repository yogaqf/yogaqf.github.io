import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const About = () => {
  const [value, setValue] = useState(0);
  const klikHandler1 = () => {
    setValue(value + 1);
  };
  const klikHandler2 = () => {
    setValue(value - 1);
  };
  const klikHandler3 = () => {
    setValue(0);
  };
  return (
    <Layout>
      <div>About</div>
      <div className="flex space-x-3">
        <Button onClick={klikHandler1}>Tambah Saya</Button>
        <Button onClick={klikHandler2}>Kurangi Saya</Button>
        <Button onClick={klikHandler3}>Reset</Button>
      </div>
      <p>{value}</p>
    </Layout>
  );
};

export default About;
