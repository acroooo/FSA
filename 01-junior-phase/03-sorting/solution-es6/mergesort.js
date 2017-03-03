'use strict';

const mergeSort = function (array) {
  if (array.length < 2) return array; // base case
  const splits = split(array),
      left = splits[0],
      right = splits[1];
  return merge(mergeSort(left), mergeSort(right)); // merge sorted!
}

const split = function (array) {
  const center = array.length / 2,
      left = array.slice(0, center),
      right = array.slice(center);
  return [left, right];
}

const merge = function (left, right) {
  const merged = [];
  let leftIdx = 0,
      rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx++]);
    } else {
      merged.push(right[rightIdx++]);
    }
  }
  // spread operator
  merged.push(...left.slice(leftIdx));
  merged.push(...right.slice(rightIdx));
  return merged;
}

// // from old video...
// function merge (left, right) {
//   const merged = [];
//   let leftIdx = 0,
//       rightIdx = 0,
//       leftVal,
//       rightVal;
//   // admittedly pretty convoluted, but we do this in order to avoid shift
//   while (leftIdx < left.length || rightIdx < right.length) {
//     leftVal = left[leftIdx];
//     rightVal = right[rightIdx];
//     if (leftVal < rightVal || rightVal === undefined) {
//       merged.push(leftVal);
//       leftIdx++;
//     } else {
//       merged.push(rightVal);
//       rightIdx++;
//     }
//   }
//   return merged;
// }