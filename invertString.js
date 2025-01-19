function invertString(str) {
  let result = "";

  const characters = Array.from(str);

  for (let i = characters.length - 1; i >= 0; i--) {
    result += characters[i];
  }

  return result;
}

const phrase = process.argv[2];

console.log(invertString(phrase));
