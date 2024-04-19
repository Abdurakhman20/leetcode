const quickSort = (array: number[]): number[] => {
  if(array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const leftArray = [], rightArray = [];

  for(let i = 0; i < array.length - 1; i++) {
    if(array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }
 
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

const unsortedArray = [5, 1, 4, 2, 7, 3, 6];
const start = Date.now();
console.log(quickSort(unsortedArray));
const end = Date.now() - start;
console.log(end);