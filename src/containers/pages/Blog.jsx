import Footer from "components/navigation/footer";
import NavBar from "components/navigation/navBar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
function Blog() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">Blog</div>
      <Footer />
    </Layout>
  );
}

export default Blog;