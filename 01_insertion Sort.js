function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i]; // Current element to be inserted at the correct position
      let j = i - 1;
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]; // Shift elements to the right if they are greater than the current element
        j--;
      }
  
      arr[j + 1] = current; // Insert the current element at the correct position
    }
  
    return arr;
  }
  
  const numbers = [5, 2, 8, 1, 4];
  const sortedNumbers = insertionSort(numbers);
  console.log(sortedNumbers); // Outputs: [1, 2, 4, 5, 8]
  