import { calculateProgress } from "./calculateProgress";
import { describe, expect, it } from "@jest/globals";

describe("calculateProgress", () => {
  it("should return 50% when 5 out of 10 sentences are completed", () => {
    // Arrange
    const completed = 5;
    const total = 10;

    // Act
    const result = calculateProgress(completed, total);

    // Assert
    expect(result).toBe(50);
  });

  it("should return 0% when 0 out of 10 sentences are completed", () => {
    // Arrange
    const completed = 0;
    const total = 10;

    // Act
    const result = calculateProgress(completed, total);

    // Assert
    expect(result).toBe(0);
  });

  it("should return null when total is 0", () => {
    // Arrange
    const completed = 0;
    const total = 0;

    // Act
    const result = calculateProgress(completed, total);

    // Assert
    expect(result).toBeNull();
  });

  it("should return 100 when completed exceeds total", () => {
    // Arrange
    const completed = 12;
    const total = 10;

    // Act
    const result = calculateProgress(completed, total);

    // Assert
    expect(result).toBe(100);
  });

  //   it("should throw an error when completed is negative", () => {
  //     // Arrange
  //     const completed = -2;
  //     const total = 10;

  //     // Act & Assert
  //     expect(() => calculateProgress(completed, total)).toThrow(
  //       "Completed cannot be negative",
  //     );
  //   });

  //   it("should throw an error when total is negative", () => {
  //     // Arrange
  //     const completed = 5;
  //     const total = -10;

  //     // Act & Assert
  //     expect(() => calculateProgress(completed, total)).toThrow(
  //       "Total cannot be negative",
  //     );
  //   });

  it.each([
    {
      completed: -2,
      total: 10,
      error: "Completed cannot be negative",
    },
    {
      completed: 5,
      total: -10,
      error: "Total cannot be negative",
    },
  ])("should throw an error", ({ completed, total, error }) => {
    expect(() => {
      calculateProgress(completed, total);
    }).toThrow(error);
  });

  it.each([
    { completed: 2, total: 4 },
    { completed: 3, total: 6 },
    { completed: 8, total: 16 },
  ])(`Should return 50% for $completed/$total`, ({ completed, total }) => {
    expect(calculateProgress(completed, total)).toBe(50);
  });
});
