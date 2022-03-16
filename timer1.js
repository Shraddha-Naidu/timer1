const givenTimesArr = process.argv.slice(2);

const timer = (givenTimes) => {

  //EDGE CASES --> no time, NaN, negative number
  if (!givenTimes.length || givenTimes < 0 || givenTimes === NaN) {
    return;
  }

  for (let time of givenTimes) {
    setTimeout(() => {
      process.stdout.write('\x07');//for beep
      console.log(`${time} sec`)
    }, time * 1000); //time * 1000 for seconds
  }
};

timer(givenTimesArr)