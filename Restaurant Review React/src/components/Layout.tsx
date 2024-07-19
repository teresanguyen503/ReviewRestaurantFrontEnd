import { ReactNode } from "react";
import LoginForm from "./LoginForm";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <header className="col-12 d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
          <h1 className="h3">Restaurant Review</h1>
          <button
            type="button"
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Login
          </button>

          <div
            className="modal fade"
            id="loginModal"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-5">
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="row">
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Group
                </a>
              </li>
              {/* Add more navigation links here */}
            </ul>
          </div>
        </nav>
        <main className="col-md-9 ml-sm-auto col-lg-10 px-4">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
