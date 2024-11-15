// 输入strs = ["flower","flow","flight"]，输出"fl"

const getPre = (arr) => {
  let pre = "";

  const len = arr.len;

  const maxLength = arr.reduce((num, next) => {
    if (next.length < num) {
      return next.length;
    }
    return num;
  }, 0);

  let checkOver = false;
  while (pre.length >= maxLength && !checkOver) {
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
};

console.log(getPre(["flower", "flow", "flight"]));
