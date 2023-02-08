import { onMove } from './image-focal-point.helpers';

const imageContainer = {
  clientWidth: 200,
  clientHeight: 200,
} as HTMLDivElement;

describe('focal-point/onMove specs', () => {
  describe('base case', () => {
    const boundingRectangle = { top: 0, left: 0 } as DOMRect;

    it('should does not call to setX, setY nor onChange when it feeds canMove equals false', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: false,
        onChange: jest.fn(),
      };
      const event = {} as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).not.toHaveBeenCalled();
      expect(props.setY).not.toHaveBeenCalled();
      expect(props.onChange).not.toHaveBeenCalled();
    });

    it('should calls to setX, setY nor onChange when it feeds canMove equals true, initially we are in the 50% X and 50%Y and it moves 1px to the left', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 101,
        pageY: 100,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(50.5);
      expect(props.setY).toHaveBeenCalledWith(50);
      expect(props.onChange).toHaveBeenCalledWith(50.5, 50);
    });

    it('should calls to setX, setY nor onChange when it feeds canMove equals true, initially we are in the 50% X and 50%Y and it moves -1px to the left', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 99,
        pageY: 100,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(49.5);
      expect(props.setY).toHaveBeenCalledWith(50);
      expect(props.onChange).toHaveBeenCalledWith(49.5, 50);
    });

    it('should calls to setX, setY nor onChange when it feeds canMove equals true, initially we are in the 50% X and 50%Y and it moves 1px to the top', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 100,
        pageY: 101,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(50);
      expect(props.setY).toHaveBeenCalledWith(50.5);
      expect(props.onChange).toHaveBeenCalledWith(50, 50.5);
    });

    it('should calls to setX, setY nor onChange when it feeds canMove equals true, initially we are in the 50% X and 50%Y and it moves -1px to the top', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 100,
        pageY: 99,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(50);
      expect(props.setY).toHaveBeenCalledWith(49.5);
      expect(props.onChange).toHaveBeenCalledWith(50, 49.5);
    });

    it('should calls to setX, setY nor onChange when it feeds canMove equals true, initially we are in the 50% X and 50%Y and it moves 2px to the top and -2px to the left', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 98,
        pageY: 102,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(49);
      expect(props.setY).toHaveBeenCalledWith(51);
      expect(props.onChange).toHaveBeenCalledWith(49, 51);
    });

    it('should calls to setX, setY nor onChange with 0% on X axis when it feeds canMove equals true, it moves with negative values to the left', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: -20,
        pageY: 100,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(0);
      expect(props.setY).toHaveBeenCalledWith(50);
      expect(props.onChange).toHaveBeenCalledWith(0, 50);
    });

    it('should calls to setX, setY nor onChange with 0% on Y axis when it feeds canMove equals true, it moves with negative values to the top', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 100,
        pageY: -20,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(50);
      expect(props.setY).toHaveBeenCalledWith(0);
      expect(props.onChange).toHaveBeenCalledWith(50, 0);
    });

    it('should calls to setX, setY nor onChange with 100% on X axis when it feeds canMove equals true, it moves with more than 100% values to the left', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 210,
        pageY: 100,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(100);
      expect(props.setY).toHaveBeenCalledWith(50);
      expect(props.onChange).toHaveBeenCalledWith(100, 50);
    });

    it('should calls to setX, setY nor onChange with 100% on Y axis when it feeds canMove equals true, it moves with more than 100% values to the top', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 100,
        pageY: 220,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(50);
      expect(props.setY).toHaveBeenCalledWith(100);
      expect(props.onChange).toHaveBeenCalledWith(50, 100);
    });
  });

  describe('image container inside some page an its location is not 0/0', () => {
    const boundingRectangle = { top: 400, left: 400 } as DOMRect;

    it('should does not call to setX, setY nor onChange when it feeds canMove equals false', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: false,
        onChange: jest.fn(),
      };
      const event = {} as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).not.toHaveBeenCalled();
      expect(props.setY).not.toHaveBeenCalled();
      expect(props.onChange).not.toHaveBeenCalled();
    });

    it('should calls to setX, setY nor onChange when it feeds canMove equals true, initially we are in the 50% X and 50%Y and it moves 1px to the left', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 501,
        pageY: 500,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(50.5);
      expect(props.setY).toHaveBeenCalledWith(50);
      expect(props.onChange).toHaveBeenCalledWith(50.5, 50);
    });

    it('should calls to setX, setY nor onChange when it feeds canMove equals true, initially we are in the 50% X and 50%Y and it moves -1px to the left', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 499,
        pageY: 500,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(49.5);
      expect(props.setY).toHaveBeenCalledWith(50);
      expect(props.onChange).toHaveBeenCalledWith(49.5, 50);
    });

    it('should calls to setX, setY nor onChange when it feeds canMove equals true, initially we are in the 50% X and 50%Y and it moves 1px to the top', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 500,
        pageY: 501,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(50);
      expect(props.setY).toHaveBeenCalledWith(50.5);
      expect(props.onChange).toHaveBeenCalledWith(50, 50.5);
    });

    it('should calls to setX, setY nor onChange when it feeds canMove equals true, initially we are in the 50% X and 50%Y and it moves -1px to the top', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 500,
        pageY: 499,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(50);
      expect(props.setY).toHaveBeenCalledWith(49.5);
      expect(props.onChange).toHaveBeenCalledWith(50, 49.5);
    });

    it('should calls to setX, setY nor onChange when it feeds canMove equals true, initially we are in the 50% X and 50%Y and it moves 2px to the top and -2px to the left', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 498,
        pageY: 502,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(49);
      expect(props.setY).toHaveBeenCalledWith(51);
      expect(props.onChange).toHaveBeenCalledWith(49, 51);
    });

    it('should calls to setX, setY nor onChange with 0% on X axis when it feeds canMove equals true, it moves outside to the left', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 320,
        pageY: 500,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(0);
      expect(props.setY).toHaveBeenCalledWith(50);
      expect(props.onChange).toHaveBeenCalledWith(0, 50);
    });

    it('should calls to setX, setY nor onChange with 0% on Y axis when it feeds canMove equals true, it moves outside values to the top', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 500,
        pageY: 320,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(50);
      expect(props.setY).toHaveBeenCalledWith(0);
      expect(props.onChange).toHaveBeenCalledWith(50, 0);
    });

    it('should calls to setX, setY nor onChange with 100% on X axis when it feeds canMove equals true, it moves outside to the right', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 610,
        pageY: 500,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(100);
      expect(props.setY).toHaveBeenCalledWith(50);
      expect(props.onChange).toHaveBeenCalledWith(100, 50);
    });

    it('should calls to setX, setY nor onChange with 100% on Y axis when it feeds canMove equals true, it moves outside to the bottom', () => {
      // Arrange
      const props = {
        setX: jest.fn(),
        setY: jest.fn(),
        boundingRectangle,
        canMove: true,
        onChange: jest.fn(),
      };
      const event = {
        pageX: 500,
        pageY: 620,
        currentTarget: imageContainer,
      } as unknown as MouseEvent;

      // Act
      onMove(props)(event);

      // Assert
      expect(props.setX).toHaveBeenCalledWith(50);
      expect(props.setY).toHaveBeenCalledWith(100);
      expect(props.onChange).toHaveBeenCalledWith(50, 100);
    });
  });
});
