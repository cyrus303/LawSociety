import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Modal', () => {
  let onCloseMock;

  beforeEach(() => {
    onCloseMock = jest.fn();
    ReactDOM.render(
      <Modal onClose={onCloseMock} actionBar={<div>Test ActionBar</div>}>
        Test Children
      </Modal>,
      container
    );
  });

  afterEach(() => {
    onCloseMock.mockClear();
  });

  it('should render children and action bar', () => {
    expect(container.querySelector('.modal-container')).toBeTruthy();
    expect(container.querySelector('.modal-container').textContent).toContain(
      'Test Children'
    );
    expect(container.querySelector('.modal-container').textContent).toContain(
      'Test ActionBar'
    );
  });

  it('should add and remove overflow-hidden class to body', () => {
    expect(document.body.classList.contains('overflow-hidden')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(container);
    expect(document.body.classList.contains('overflow-hidden')).toBeFalsy();
  });

  it('should call the onClose callback when clicking the overlay', () => {
    const overlay = container.querySelector('.modal-overlay');
    overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
