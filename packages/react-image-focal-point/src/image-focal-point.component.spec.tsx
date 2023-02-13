import { render, screen } from '@testing-library/react';
import { ImageFocalPoint, ImageFocalPointProps } from './image-focal-point.component';

describe('focal-point/focal-point.component specs', () => {
  it('should render a focal point button and an image when it feeds required props', () => {
    // Arrange
    const props: ImageFocalPointProps = {
      src: 'test-image-url',
      onChange: jest.fn(),
    };

    // Act
    render(<ImageFocalPoint {...props} />);

    // Assert
    expect(screen.getByRole('button', { name: 'Focal point' })).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render the button name when it feeds some label value', () => {
    // Arrange
    const props: ImageFocalPointProps = {
      src: 'test-image-url',
      onChange: jest.fn(),
      labels: {
        focalPoint: 'test-button-name',
      },
    };

    // Act
    render(<ImageFocalPoint {...props} />);
    const button = screen.getByRole('button', { name: props.labels?.focalPoint });

    // Assert
    expect(button).toBeInTheDocument();
  });

  it('should render the image alt attribute when it feeds some alt value', () => {
    // Arrange
    const props: ImageFocalPointProps = {
      src: 'test-image-url',
      onChange: jest.fn(),
      alt: 'test-image-alt',
    };

    // Act
    render(<ImageFocalPoint {...props} />);
    const image = screen.getByRole('img') as HTMLImageElement;

    // Assert
    expect(image.alt).toEqual(props.alt);
  });

  it('should render the focal point button in the middle of the image when it uses the default props', () => {
    // Arrange
    const props: ImageFocalPointProps = {
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
    const props: ImageFocalPointProps = {
      src: 'test-image-url',
      onChange: jest.fn(),
      focalPoint: {
        x: 80,
        y: 20,
      },
    };

    // Act
    render(<ImageFocalPoint {...props} />);

    // Assert
    const focalPoint = screen.getByRole('button');

    expect(focalPoint).toHaveStyle({ top: '20%', left: '80%' });
  });
});
