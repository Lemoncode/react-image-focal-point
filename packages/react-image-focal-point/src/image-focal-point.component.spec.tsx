import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ImageFocalPoint } from './image-focal-point.component';

describe('focal-point/focal-point.component specs', () => {
  it('should render a focal point button and an image when it feeds required props', () => {
    // Arrange
    const props = {
      src: 'test-image-url',
      onChange: jest.fn(),
    };

    // Act
    render(<ImageFocalPoint {...props} />);

    // Assert
    expect(screen.getByRole('button', { name: 'Punto focal' })).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the focal point button in the middle of the image when it uses the default props', () => {
    // Arrange
    const props = {
      src: 'test-image-url',
      onChange: jest.fn(),
    };

    // Act
    render(<ImageFocalPoint {...props} />);

    // Assert
    const focalPoint = screen.getByRole('button');

    expect(focalPoint).toHaveStyle({ top: '50%', left: '50%' });
  });

  it('should render the focal point button in top 20% and left 80% when it feeds x 80 and y 20', () => {
    // Arrange
    const props = {
      src: 'test-image-url',
      onChange: jest.fn(),
      x: 80,
      y: 20,
    };

    // Act
    render(<ImageFocalPoint {...props} />);

    // Assert
    const focalPoint = screen.getByRole('button');

    expect(focalPoint).toHaveStyle({ top: '20%', left: '80%' });
  });

  // TODO: Check this issue with E2E tests
  xit('should call to onChange with new position when it moves the focal point', async () => {
    // Arrange
    const props = {
      src: 'test-image-url',
      onChange: jest.fn(),
    };

    // Act
    render(<ImageFocalPoint {...props} />);

    const focalPoint = screen.getByRole('button');
    await userEvent.pointer([
      { keys: '[MouseLeft>]', target: focalPoint },
      {
        coords: { x: 140, y: 140 },
      },
      { keys: '[/MouseLeft]' },
    ]);

    // Assert
    expect(screen.getByRole('button')).toHaveStyle({ top: '50%', left: '50%' });
  });
});
