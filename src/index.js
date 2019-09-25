module.exports = function zeros(expression) {
  let arr = expression.split("*");
  let twoNum = 0;
  let fiveNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(arr[i].length-2) == "!!") {
      let count = +arr[i].slice(0, arr[i].length-2);
      if (count%2 == 1) {
        for (let j = 1; j <= count; j+=2) {
          if (j%5 == 0) {
            fiveNum++;
          }
          if (j%25 ==0) {
            fiveNum++;
          }
        }
      } else {
        for (let j = 2; j <= count; j+=2) {
          if (j%5 == 0) {
            fiveNum++;
          } else if (j%2 == 0) {
            twoNum++;
          } 
          if (j%25 == 0) {
            fiveNum++;
          }
        }
      }
    } else {
      let count = +arr[i].slice(0, arr[i].length-1);
      for (let j = 1; j <= count; j++) {
        if (j%5 == 0) {
          fiveNum++;
        } else if (j%2 == 0) {
          twoNum++;
        } 
        if (j%25 == 0) {
          fiveNum++;
        }
      }
    }
  }
  if (fiveNum < twoNum) {
    return fiveNum;
  } else {
    return twoNum;
  }
}
