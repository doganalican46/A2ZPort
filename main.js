function findLongestWord(sentence) {
    
  const words = sentence
    .toLowerCase()
    .replace(/[^a-z\s]/g, '') 
    .split(/\s+/);

  let maxLength = 0;
  let maxIndex = -1;


  words.forEach((word, index) => {
    const length = word.length;

    if (length > maxLength || (length === maxLength && countVowels(word) > countVowels(words[maxIndex]))) {
      maxLength = length;
      maxIndex = index;
    }
  });

  return words[maxIndex];
}

function countVowels(word) {
  if (!word) {
    return 0;
  }
  const vowels = 'aeiou';
  return word.split('').filter(char => vowels.includes(char)).length;
}



// Test 1
const sentence1 = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
console.log(findLongestWord(sentence1)); // Expected output: "experience"

// Test 2
const sentence2 = "The quick brown fox jumps over the lazy dog";
console.log(findLongestWord(sentence2)); // Expected output: "quick" or "brown"

// Test 3
const sentence3 = "";
console.log(findLongestWord(sentence3)); // Expected output: null

// Test 4
const sentence4 = "Hello, world!";
console.log(findLongestWord(sentence4)); // Expected output: "world"

// Test 5
const sentence5 = "This   is    a test   sentence";
console.log(findLongestWord(sentence5)); // Expected output: "sentence"

// Test 6
const sentence6 = "A B C D E F G";
console.log(findLongestWord(sentence6)); //Expected output: any letter

