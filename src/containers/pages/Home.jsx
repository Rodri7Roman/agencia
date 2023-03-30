import Footer from "components/navigation/footer";
import NavBar from "components/navigation/navBar";
import Layout from "hocs/layouts/Layout";
import Header from "components/home/Header";
import Incentives from "components/home/Incentives";
import UseCases from "components/home/UseCases";
import Features from "components/home/Features";

function Home() {
  return (
    <Layout>
      <NavBar />
      <Header/>
      <Incentives/>
      <UseCases/>
      <Features/>
      <Footer />
    </Layout>
  );
}

export default Home;
