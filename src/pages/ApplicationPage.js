import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ApplicationPage({ handleUpdate }) {
  const [name, setName] = useState('');
  const [eftNumber, setEftNumber] = useState('');
  const [applicationType, setApplicationType] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [nameError, setNameError] = useState(false);
  const [applicationTypeError, setApplicationTypeError] = useState(false);

  const [orderNo, setOrderNo] = useState('');
  const [solNo, setSolNo] = useState('');
  const [dateValue, setDateValue] = useState('');

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEftChange = (event) => {
    setEftNumber(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    // let eftReferenceNumber = orderNo + solNo + dateValue;
    // eftReferenceNumber = eftReferenceNumber.split('-').join('');
    // console.log(eftReferenceNumber);

    if (name === '') {
      setNameError(true);
      setTimeout(() => {
        setNameError(false);
      }, 2000);
    }
    if (applicationType === '') {
      setApplicationTypeError(true);
      setTimeout(() => {
        setApplicationTypeError(false);
      }, 2000);
    }
    if (name !== '' && applicationType !== '') {
      handleUpdate(name, applicationType, eftNumber, checked);
      navigate('/');
    }
  };

  function onChangeValue(event) {
    setApplicationType(event.target.value);
  }

  function handleOrderNo(event) {
    setOrderNo(event.target.value);
    console.log(orderNo);
  }

  function handleSolNo(event) {
    setSolNo(event.target.value);
    console.log(solNo);
  }

  function handleDateValue(event) {
    setDateValue(event.target.value);
    console.log(dateValue);
  }

  return (
    <div className="application-page-container">
      <div className="main-container shadow p-3 mb-5 bg-white rounded">
        <h1 className="text-3xl m-3">Application Page</h1>
        <form onSubmit={handleClick}>
          <div className="form-group mt-3">
            <label>
              Name
              <input
                type="text"
                onChange={handleNameChange}
                value={name}
                className="form-control placeholder:text-sm w-80 mt-2"
                placeholder="Enter name"
              />
            </label>
            {nameError && (
              <small className="text-red-500 name-error mt-1">
                please enter your name
              </small>
            )}
          </div>

          <div className="form-check form-check-inline mt-3">
            <div onChange={onChangeValue} className="radio-container">
              <label className="-ml-6 mb-2 mt-3">
                Select Application Type{' '}
              </label>
              <div className="mb-2">
                <input
                  type="radio"
                  value="Practising Certificate"
                  name="applicationType"
                  checked={applicationType === 'Practising Certificate'}
                  className="mr-2"
                  id="PC"
                />
                <label htmlFor="PC">Practising Certificate</label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  value="Qualifying Certificate"
                  name="applicationType"
                  checked={applicationType === 'Qualifying Certificate'}
                  className="mr-2"
                  id="QC"
                />
                <label htmlFor="QC">Qualifying Certificate</label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  value="Service of State"
                  name="applicationType"
                  checked={applicationType === 'Service of State'}
                  className="mr-2"
                  id="SOS"
                />
                <label htmlFor="SOS">Service of State</label>
              </div>
            </div>
            {applicationTypeError && (
              <small className="text-red-500 -ml-6">
                Please select an application type
              </small>
            )}
          </div>

          <div className="form-check mt-3 ">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <label
              className="form-check-label mb-2 "
              htmlFor="flexCheckDefault"
            >
              Pay by EFT
            </label>
          </div>

          {checked && (
            <div className="form-group mt-2 ml-4">
              <label>
                EFT Reference Number:
                <input
                  type="text"
                  onChange={handleEftChange}
                  value={eftNumber}
                  className="form-control mt-2 placeholder:text-sm w-80"
                  placeholder="Enter Reference Number"
                  maxLength="12"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </label>
            </div>
          )}

          {/* {checked && (
            <div className="form-group mt-2 ml-4 ">
              <label>EFT Reference Number: </label>
              <div className="eft-ref">
                <input
                  type="text"
                  className="form-control mt-2 placeholder:text-sm w-24"
                  placeholder="Order No"
                  value={orderNo}
                  onChange={handleOrderNo}
                  maxLength="6"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                -
                <input
                  type="text"
                  className="form-control mt-2 placeholder:text-sm w-32"
                  placeholder="Solicitor No"
                  value={solNo}
                  onChange={handleSolNo}
                  maxLength="6"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                -
                <input
                  type="date"
                  className="form-control mt-2 placeholder:text-sm w-36"
                  placeholder="Date"
                  value={dateValue}
                  onChange={handleDateValue}
                />
              </div>
            </div>
          )} */}
        </form>
        <div className="buttons m-3">
          <Link to="/" onClick={handleClick} className="btn btn-primary mr-4">
            Submit
          </Link>
          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApplicationPage;
