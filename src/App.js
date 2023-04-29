import HomePage from './pages/HomePage';
import ApplicationPage from './pages/ApplicationPage';
import Applications from './components/Applications';

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
import { useState } from 'react';

function App() {
  const [applicationData, setApplicationData] = useState([
    {
      name: 'sachin',
      applicationType: 'Practising Certificate',
      reference: 111111,
    },
    {
      name: 'Eoghan',
      applicationType: 'Qualifying Certificate',
      reference: 444444,
    },
  ]);

  const handleUpdate = (name, applicationType, eftNumber, checked) => {
    let eftValue = '';

    if (checked) {
      if (eftNumber === '') {
        eftValue = 'N/A';
      } else {
        eftValue = eftNumber;
      }
    } else {
      eftValue = 'Out of Scope';
    }

    const updatedData = [
      ...applicationData,
      { name, applicationType, reference: eftValue },
    ];
    setApplicationData(updatedData);
  };

  // console.log(applicationData);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route
              path="/allApplications"
              element={<Applications data={applicationData} />}
            />
          </Route>
          <Route
            path="/application"
            element={<ApplicationPage handleUpdate={handleUpdate} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
