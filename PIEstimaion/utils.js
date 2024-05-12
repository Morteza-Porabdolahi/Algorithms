export function getRandomNumber() {
  let randomNumber = 0;

  while (true) {
    randomNumber = Math.random();

    if (randomNumber !== 0) {
      return randomNumber;
    }
  }
}
