import Footer from "components/navigation/footer";
import NavBar from "components/navigation/navBar";
import Layout from "hocs/layouts/Layout";
import Header from "components/home/Header";
import Incentives from "components/home/Incentives";
import UseCases from "components/home/UseCases";
import Features from "components/home/Features";
import CTA from "components/home/CTA";
import LogoCloud from "components/home/LogoCloud";
import BlogList from "components/home/BlogList";

function Home() {
  return (
    <Layout>
      <NavBar />
      <div className="py-28">
        <Header />
        <Incentives />
        <UseCases />
        <Features />
        <CTA />
        <LogoCloud />
        <BlogList />
      </div>

      <Footer />
    </Layout>
  );
}

export default Home;
