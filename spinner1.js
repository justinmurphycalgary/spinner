for (let i = 0; i < 1000; i++) {
  setInterval(function () {
    setTimeout(() => {
      process.stdout.write("\r|   ");
    }, 50);

    setTimeout(() => {
      process.stdout.write("\r/   ");
    }, 100);

    setTimeout(() => {
      process.stdout.write("\r-   ");
    }, 150);

    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write("\r\\   ");
    }, 200),
      250;
  });
}
