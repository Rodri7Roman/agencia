import Footer from "components/navigation/footer";
import NavBar from "components/navigation/navBar";
import Layout from "hocs/layouts/Layout";

function Carrers() {
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">Carrers</div>
      <Footer />
    </Layout>
  );
}

export default Carrers;