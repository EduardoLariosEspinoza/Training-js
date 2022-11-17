var binary = {};
var arr = [8, 5, 10, 3, 6, 12];

function makeBinary(binary, number) {
  if (binary.value === undefined) {
    binary.value = number;
  } else if (number > binary.value) {
    if (binary.right === undefined) {
      binary.right = { value: number };
    } else {
      binary.right = makeBinary(binary.right, number);
    }
  } else {
    if (binary.left === undefined) {
      binary.left = { value: number };
    } else {
      binary.left = makeBinary(binary.left, number);
    }
  }
  return binary;
}

for (let i in arr) {
  makeBinary(binary, arr[i]);
}

console.log(binary);