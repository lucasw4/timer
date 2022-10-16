let timer = function() {
  let input = process.argv.splice(2);
  for (let i of input) {
    if (Number(i) < 0 || Number(isNaN(i))) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(i));
      i++;
    }
  }
};

timer();