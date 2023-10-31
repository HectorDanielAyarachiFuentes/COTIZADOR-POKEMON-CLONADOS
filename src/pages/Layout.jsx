import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    padding: 0,
    backgroundColor: "#FDE349", // Color de fondo amarillo
    border: "2px solid #FFCB05", // Borde amarillo claro
    borderRadius: "5px",
  };

  const linkStyle = {
    color: "#E3350D", // Color de enlace rojo
    textDecoration: "none",
    fontSize: "1.2em",
    fontWeight: "bold",
  };

  return (
    <div>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link to="/" style={linkStyle}>
              Hogar
            </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/dashboard" style={linkStyle}>
              Dedicatoria
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
