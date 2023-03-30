import Footer from "components/navigation/footer";
import NavBar from "components/navigation/navBar";
import Layout from "hocs/layouts/Layout";

function Services() {
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">Services</div>
      <Footer />
    </Layout>
  );
}

export default Services;