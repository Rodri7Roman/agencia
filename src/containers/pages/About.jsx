import Footer from "components/navigation/footer";
import NavBar from "components/navigation/navBar";
import Layout from "hocs/layouts/Layout";

function About() {
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">About</div>
      <Footer />
    </Layout>
  );
}

export default About;