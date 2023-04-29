import ModalPage from '../pages/ModalPage';

import { Link } from 'react-router-dom';

import { BiX } from 'react-icons/bi';

function Applications({ data }) {
  if (data.length > 0) {
    const rendredRows = data.map((row) => {
      return (
        <tr key={row.name}>
          <td>
            {row.name.toLowerCase().charAt(0).toUpperCase() + row.name.slice(1)}
          </td>
          <td>{row.applicationType}</td>
          <td>{row.reference}</td>
          <td>
            <ModalPage data={row} />
          </td>
        </tr>
      );
    });

    return (
      <div className="shadow p-3 mb-5 bg-white rounded">
        <div className="header">
          <h3>Active Applications</h3>
          <Link to="/" className="closebtn">
            <BiX />
          </Link>
        </div>
        <table className="table table-hover table-bordered mt-3">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Application Type</th>
              <th scope="col">reference No</th>
              <th scope="col">Recept Link</th>
            </tr>
          </thead>
          <tbody>{rendredRows}</tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="shadow p-3 mb-5 bg-white rounded w-96">
        <div className="header">
          <h3>No Active Applications</h3>
          <Link to="/" className="closebtn">
            <BiX />
          </Link>
        </div>
      </div>
    );
  }
}

export default Applications;
