const insertionSort = (arr: number[]): number[] => {
  for(let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j;
    for(j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }

  return arr;
}
const arr = [1, 5, 7, 8, 2, 3, 4, 99, 22];

const newArr = insertionSort(arr);

console.log(newArr);