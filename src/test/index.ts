function longestCommonPrefix(strs: string[]): string {
  let pre = "";
  const arr = strs;
  const len = arr.length;
  if (len <= 0) return pre;
  if (len === 1) return strs[0];

  const maxLength = arr.reduce((num, next) => {
    if (next.length < num) {
      return next.length;
    }
    return num;
  }, arr[0].length);
  if (maxLength <= 0) return pre;

  let checkOver = false;
  while (pre.length < maxLength && !checkOver) {
    const currentCheckIndex = pre.length;
    let currentCheckVal = arr[0][pre.length];

    for (let index = 1; index < arr.length; index++) {
      const val = arr[index][currentCheckIndex];
      if (val !== currentCheckVal) {
        checkOver = true;
        break;
      }
    }
    if (!checkOver) pre += currentCheckVal;
  }

  return pre;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
