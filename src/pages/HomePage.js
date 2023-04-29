import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="p-5 text-center homepage">
        <img
          src="https://www.lawsociety.ie/globalassets/consumer_site/lsoi_logo_indigo_rgb.png"
          alt="logo"
          className="logo"
        />
        <h4 className="mb-3 mt-5 subheading">
          This site helps you to apply for your Practising Certificate
          ,Qualifying Certificate and Service of State certificate.
        </h4>
        <div className="mt-4">
          <Link to="/application" className="btn btn-primary m-2">
            Application Form
          </Link>
          <Link to="/allApplications" className="btn btn-secondary">
            View All Applications
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default HomePage;
