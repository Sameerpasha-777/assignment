function reverseWords(sentence) {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }

    return words.join(" ");
}

function reverseWord(word) {
    return word.split("").reverse().join("");
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);


2)

const numbers = [5, 2, 9, 1, 5, 6];
numbers.sort((a, b) => b - a);

console.log(numbers);

