const row = 5;
const col = 4;
let star = "";

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= col; j++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);

const row2 = 5;
const col2 = 4;
let star2 = "";

for (let i = 1; i <= row2; i++) {
  for (let j = 1; j <= col2; j++) {
    if (j == 1 || j == col2) {
      star2 += "*";
    } else if (i == 1 || i == row2) {
      star2 += "*";
    } else {
      star2 += " ";
    }
  }
  star2 += "\n";
}

console.log(star2);

const n = 5;
let star3 = "";

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    star3 += "*";
  }
  star3 += "\n";
}

console.log(star3);

const m = 5;
let star4 = "";

for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= i; j++) {
    star4 += "*";
  }
  star4 += "\n";
}

console.log(star4);
