const str = "afdsfdsssass";

const findStr = (s: string) => {
  let result: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    if (result[s[i]]) {
      result[s[i]]++;
    } else {
      result[s[i]] = 1;
    }
  }

  return Object.entries(result).reduce(
    (tmp, next) => {
      if (tmp[1] < next[1]) return next;
      return tmp;
    },
    ["", 0]
  )[0];
};
const findStr2 = (s: string) => {
  let result: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    if (result[s[i]]) {
      result[s[i]]++;
    } else {
      result[s[i]] = 1;
    }
  }

  return Object.entries(result).reduce(
    (tmp, next) => {
      if (tmp[1] < next[1]) return next;
      return tmp;
    },
    ["", 0]
  )[0];
};

console.log(findStr2(str));
