import Footer from "components/navigation/footer";
import NavBar from "components/navigation/navBar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
function Contact() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">Contact</div>
      <Footer />
    </Layout>
  );
}

export default Contact;