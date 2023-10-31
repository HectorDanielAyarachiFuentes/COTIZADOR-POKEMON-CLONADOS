import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around", // Ajusta según tus preferencias
    listStyle: "none",
    padding: 0,
    background: "#EE6159", // Color de fondo Pokédex
    borderBottom: "5px solid #001F33", // Color de acento Pokédex
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#001F33", // Color del texto Pokédex
    padding: "10px 15px",
    borderRadius: "10px",
    transition: "background-color 0.3s", // Transición de color de fondo
  };

  const hoverStyle = {
    backgroundColor: "#001F33", // Color de fondo al hacer hover
    color: "#FFFFFF", // Color del texto al hacer hover
  };

  return (
    <div>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link to="/" style={linkStyle} activeStyle={hoverStyle}>
              Hogar
            </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle} activeStyle={hoverStyle}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/dashboard" style={linkStyle} activeStyle={hoverStyle}>
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
