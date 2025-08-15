/**
 * Sums all provided numbers
 */
export function add(...numbers: number[]): number {
  return numbers.reduce((sum, number) => sum + number, 0);
}
