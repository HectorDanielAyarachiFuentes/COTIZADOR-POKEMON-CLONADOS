import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around", // Opcional, puedes ajustar esto según tus necesidades
    listStyle: "none",
    padding: 0,
  };

  return (
    <div>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
