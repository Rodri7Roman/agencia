import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "assets/images/icons8-r-64.png";
import loading from "assets/images/loading.gif";
import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";

function Navbar() {
  const [loading, setLoading] = useState(true);

  window.onscroll = function(){scrollFunction()}

  function scrollFunction(){
    if (document.getElementById('navbar')){
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById('navbar').classList.add('shadow-navbar')
        document.getElementById('navbar').classList.add('bg-white')
      }
      else{
        document.getElementById('navbar').classList.remove('shadow-navbar')
        document.getElementById('navbar').classList.remove('bg-white')
      }
    }
  }

  return (
    <nav
      data-scroll
      data-scroll-id="hey"
      id="navbar"
      className="w-full py-6 top-0 bg-white shadow-navbar z-40 transition duration-300 ease-in-out z-40 fixed"
    >
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to={"/"} className="ml-4 mt-2">
            <img src={logo} width={50} height={80} />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/casos"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out -4 mx-4"
            >
              Casos
            </NavLink>
            <NavLink
              to="/servicios"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out -4 mx-4"
            >
              Servicios
            </NavLink>
            <NavLink
              to="/nosotros"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out -4 mx-4"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/carreras"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out -4 mx-4"
            >
              Carreras
            </NavLink>
            <NavLink
              to="/blog"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out -4 mx-4"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contacto"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out -4 mx-4"
            >
              Contacto
            </NavLink>

            <Link
              to="/contacto"
              className="inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease focus:outline-none focus:ring-2 focus:ring-orange-button focus:ring-offset-2"
            >
              Contratanos
              <DotLoader
                className="ml-3 -mr-1 h-5 w-5"
                aria-hidden="true"
                loading={loading}
                size={20}
                color="#f2f2f2"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
