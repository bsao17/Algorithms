export default function rotateArrayItems(arr, k) {
  const len = arr.length;
  const temp = arr.slice(len - k);
  arr.splice(len - k, k);
  arr.unshift(...temp);
}

export function rotateArrayItems2(arr, k) {
  for (let i = 0; i < k; i++) {
    let itemOne = arr.pop();
    arr.splice(0, 0, itemOne);
  }
  return arr;
}
