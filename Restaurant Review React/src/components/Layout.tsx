import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <header className="col-12 d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
          <h1 className="h3">Restaurant Review</h1>
          <button className="btn btn-outline-warning">Logout</button>
        </header>
      </div>
      <div className="row">
        {/* <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar mb-3">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Groups
                </a>
              </li>
              {/* Add more navigation links here */}
        {/* </ul>
          </div> */}
        {/* </nav> */}
        <main className="col-md-9 ml-sm-auto col-lg-10 px-4">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
