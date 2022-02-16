arr = ["\r|   ","\r/   ","\r-   ","\r\\   "]
for (let i = 0; i < 1000; i++) {
  for (const value of arr){
  setInterval(function () {
    setTimeout(() => {process.stdout.write(value)}, 150)
  150;}
  );
}
}