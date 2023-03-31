import CasesList from "components/cases/CasesList";
import Header from "components/cases/Header";
import Footer from "components/navigation/footer";
import NavBar from "components/navigation/navBar";
import Layout from "hocs/layouts/Layout";

function Cases() {
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">
        <Header />
        <CasesList />
      </div>
      <Footer />
    </Layout>
  );
}

export default Cases;
