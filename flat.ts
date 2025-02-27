const flat = (arr: any[], deep = false): any[] => {
  let result = [];
  arr.forEach((item) => {
    if (item instanceof Array) {
      if (deep) {
        result = [
          ...result,
          ...item.reduce((tmp, next) => {
            if (next instanceof Array) {
              return [...tmp, ...flat(next, true)];
            }
            return [...tmp, next];
          }, []),
        ];
      } else {
        result = [...result, ...item];
      }
    } else {
      result.push(item);
    }
  });

  return result;
};

console.log(flat([1, 2, [2, 3, [23, 1]]]));
console.log(flat([1, 2, [2, 3, [23, 1]]], true));
