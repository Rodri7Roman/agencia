import { connect } from "react-redux";
import {Link, NavLink } from "react-router-dom";
import logo from "assets/images/icons8-r-64.png";
import loading from "assets/images/loading.gif";

function Navbar() {
  return (
    <nav className="w-full py-4 top-0 fixed">
      <div className=" bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to={"/"} className="ml-4 mt-2">
            <img src={logo} width={90} height={80} />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/casos"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 -4 mx-4"
            >
              Casos
            </NavLink>
            <NavLink
              to="/servicios"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 -4 mx-4"
            >
              Servicios
            </NavLink>
            <NavLink
              to="/nosotros"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 -4 mx-4"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/carreras"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 -4 mx-4"
            >
              Carreras
            </NavLink>
            <NavLink
              to="/blog"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 -4 mx-4"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contacto"
              className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 -4 mx-4"
            >
              Contacto
            </NavLink>
            <button
              type="button"
              className=" ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2.5 text-md font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-button focus:ring-offset-2"
            >
              Contrátanos <img src={loading} className="w7 h-2 mt-1 ml-2"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
