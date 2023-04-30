import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Applications from './Applications';
import ModalPage from '../pages/ModalPage';
import { MemoryRouter } from 'react-router-dom';
import { BiX } from 'react-icons/bi';

describe('Applications', () => {
  it('should render the table with the correct data', () => {
    const data = [
      {
        name: 'application 1',
        applicationType: 'type 1',
        reference: 'ref 1',
      },
      {
        name: 'application 2',
        applicationType: 'type 2',
        reference: 'ref 2',
      },
    ];

    render(
      <MemoryRouter>
        <Applications data={data} />
      </MemoryRouter>
    );

    // Assert that the table header is rendered
    const nameHeader = screen.getByText('Name');
    const typeHeader = screen.getByText('Application Type');
    const referenceHeader = screen.getByText('reference No');
    const receptLinkHeader = screen.getByText('Recept Link');

    expect(nameHeader).toBeInTheDocument();
    expect(typeHeader).toBeInTheDocument();
    expect(referenceHeader).toBeInTheDocument();
    expect(receptLinkHeader).toBeInTheDocument();

    // Assert that the table data is rendered
    const application1Name = screen.getByText('Application 1');
    const application1Type = screen.getByText('Type 1');
    const application1Reference = screen.getByText('Ref 1');
    const application1ReceptLink = screen.getByText('View');

    expect(application1Name).toBeInTheDocument();
    expect(application1Type).toBeInTheDocument();
    expect(application1Reference).toBeInTheDocument();
    expect(application1ReceptLink).toBeInTheDocument();

    const application2Name = screen.getByText('Application 2');
    const application2Type = screen.getByText('Type 2');
    const application2Reference = screen.getByText('Ref 2');
    const application2ReceptLink = screen.getByText('View');

    expect(application2Name).toBeInTheDocument();
    expect(application2Type).toBeInTheDocument();
    expect(application2Reference).toBeInTheDocument();
    expect(application2ReceptLink).toBeInTheDocument();
  });

  it('should render no active applications message when data is empty', () => {
    const data = [];

    render(
      <MemoryRouter>
        <Applications data={data} />
      </MemoryRouter>
    );

    const noActiveApplicationsMessage = screen.getByText(
      'No Active Applications'
    );
    const closeButton = screen.getByRole('link', { name: 'Close' });

    expect(noActiveApplicationsMessage).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();

    userEvent.click(closeButton);

    expect(noActiveApplicationsMessage).not.toBeInTheDocument();
    expect(closeButton).not.toBeInTheDocument();
  });
});
