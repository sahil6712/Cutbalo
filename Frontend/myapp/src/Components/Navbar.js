import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'lightgrey' }}>
      <div className="container-fluid" style={{ fontSize: '90%' }}>
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">  
              <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="/link">Link</NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/action">Action</Link></li>
                <li><Link className="dropdown-item" to="/another-action">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled" aria-disabled="true">Disabled</span>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Signup</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
