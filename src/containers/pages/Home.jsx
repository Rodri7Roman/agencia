import Footer from "components/navigation/footer";
import NavBar from "components/navigation/navBar";
import Layout from "hocs/layouts/Layout";

function Home() {
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">Home</div>
      <Footer />
    </Layout>
  );
}

export default Home;
