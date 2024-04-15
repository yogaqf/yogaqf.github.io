import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="h-[10000px] p-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
