const calcColumn = function (columnsCount, itemNum) {
  return itemNum % columnsCount === 0 ? columnsCount : itemNum % columnsCount;
};

console.log(calcColumn(12, 77));
console.log(calcColumn(3, 35));
