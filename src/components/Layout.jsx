import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import './layout.css'

const Layout = () => {
  return (
    <Fragment>
      <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link className="lnk" to="/">E-commers</Link>  
          </div>
          <div style={{display: "flex", gap: "20px"}}>
          <Link className="lnk" to="/">Home</Link>
          <Link className="lnk" to="/cart">Cart</Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
        <Outlet />
        </div>
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
