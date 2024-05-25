// 2.1: Guess the Output And Explain Why?

let i = 4;

for (let j = 0; i < 10; i++) {
  if (j === 1 || i === 6) {
    continue;
  } else {
    console.log(i, j);

    if (i === 7) {
      break;
    }
  }
}

// output 4 0 
//        5 0
//        7 0