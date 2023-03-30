import Footer from "components/navigation/footer";
import NavBar from "components/navigation/navBar";
import Layout from "hocs/layouts/Layout";

function Cases() {
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">Cases</div>
      <Footer />
    </Layout>
  );
}

export default Cases;