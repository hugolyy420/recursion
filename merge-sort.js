function mergeSort(array, start = 0, end = array.length - 1) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    let left = mergeSort(array, start, mid);
    let right = mergeSort(array, mid + 1, end);
    let temp = merge([...left, ...right]);
    return temp;
  } else {
    return [array[start]];
  }
}

function merge(array) {
  let temp = [];
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= end) {
    if (array[i] <= array[j]) {
      temp[k++] = array[i++];
    } else {
      temp[k++] = array[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = array[i++];
  }

  while (j <= end) {
    temp[k++] = array[j++];
  }

  return temp;
}

let arr = [105, 79, 100, 110];
console.log(mergeSort(arr));
