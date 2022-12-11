let x = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99,
];
let coundL = 0;
let coundR = 0;
let wanted = window.prompt("Enter a number in range 1-99");

let linear = () => {
  for (i = 0; i < x.length; i++) {
    if (x[i] == wanted) {
      console.log(`Found ${wanted} in ${coundL} linear iterations`);
      return;
    }
    coundL++;
  }
};

let binar = () => {
  let min = 0;
  let max = x.length - 1;

  let guess;

  while (min <= max) {
    guess = Math.round((max + min) / 2);
    if (x[guess] == wanted) {
      console.log(`Found ${wanted} in ${coundR} binar iterations`);
      return;
    } else if (x[guess] < wanted) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }

    coundR++;
  }
};

binar();
linear();
