/**
 * Shuffles an array using the Fisher-Yates (aka Knuth) shuffle algorithm.
 * This function returns a new shuffled array and does not modify the original.
 * @param array The array to be shuffled.
 * @returns A new array with the elements in a random order.
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
};