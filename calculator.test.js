import { add } from './calculator';

describe('test cases for add function', () => {
  test('should throw an error if the add function is not present', () => {
    expect(add).toBeDefined();
    if (!add) {
      throw new Error('The add function is missing!');
    }
  });
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number itself when there is one number', () => {
    expect(add('1')).toBe(1);
  });

  test('should return the sum of multiple numbers separated by commas', () => {
    expect(add('1,2,3')).toBe(6);
  });

  test('should return 0 if string contains invalid characters', () => {
    expect(add('1,2,/>')).toBe(0);
    expect(add('1,2,#')).toBe(0);
    expect(add('1,2,3/>')).toBe(0);
    expect(add('/>,#')).toBe(0);
    expect(add('>')).toBe(0);
  });

  test('should return 0 if string contains only commas and no valid numbers', () => {
    expect(add(',,,')).toBe(0);
  });

  test('should return sum of numbers separated by newlines', () => {
    expect(add('1\n2\n3')).toBe(6);
  });

  test('should return sum of numbers separated by both commas and newlines', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('1,2\n3')).toBe(6);
    expect(add('1\n2,3\n4')).toBe(10);
  });

  test('should return sum of numbers with custom delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
    expect(add('//;\n1;2;3')).toBe(6);
    expect(add('//|\n1|2|3|4')).toBe(10);
    expect(add('//:\n5:6:7')).toBe(18);
  });

  test('should return 0 for invalid custom delimiter input', () => {
    expect(add('//;\n1;2,3')).toBe(0);
    expect(add('//|\n1|2|3,4')).toBe(0);
  });

  test('should throw error for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrowError('negative numbers not allowed -2');
    expect(() => add('1,-2,-3')).toThrowError('negative numbers not allowed -2, -3');
    expect(() => add('//;\n1;-2;3')).toThrowError('negative numbers not allowed -2');
  });
})
