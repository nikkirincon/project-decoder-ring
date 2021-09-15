// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'
  ]
 
  function caesar(input, shift, encode = true) {
    if(!shift || shift < -25 || shift > 25) return false;
    if(!encode) shift *= -1
    return input.toLowerCase().split('').map((letter) => {
      if(alphabet.includes(letter)) {
        if(alphabet.indexOf(letter) + shift < 0) {
          return alphabet[alphabet.indexOf(letter) + shift + 26];
        };
        if(alphabet.indexOf(letter) + shift > 25) {
          return alphabet[alphabet.indexOf(letter) + shift - 26];
        };
        return alphabet[alphabet.indexOf(letter) + shift];
      } else {
        return letter;
      };
    }).join('')
  };
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
