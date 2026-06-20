// Original story
const story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it literally stretches along the Hudson River to the Palisades. It is all farm roads and state highways, but it literally is a great ride! It was a crisp fall day and the trees were literally turning colors. I was literally having a fart of a time.';

// Convert story into an array of words
let storyWords = story.split(' ');

// Variables provided by the project
const unnecessaryWord = 'literally';
const misspelledWord = 'beautifull';
const badWord = 'fart';

// Task 1
// console.log(storyWords);

// Task 3 & 4: Count words
let count = 0;

storyWords.forEach(() => {
    count++;
});

console.log(`Word Count: ${count}`);

// Task 5 & 6: Remove unnecessary word
storyWords = storyWords.filter(word => {
    return word !== unnecessaryWord;
});

// Task 7: Correct misspelled word
storyWords = storyWords.map(word => {
    if (word === misspelledWord) {
        return 'beautiful';
    }
    return word;
});

// Task 8: Find bad word index
const badWordIndex = storyWords.findIndex(word => {
    return word === badWord;
});

console.log(`Bad Word Index: ${badWordIndex}`);

// Task 9: Replace bad word
storyWords[badWordIndex] = 'really';

// Task 10: Check if all words have 10 or fewer characters
const lengthCheck = storyWords.every(word => {
    return word.length <= 10;
});

console.log(`All words <= 10 characters: ${lengthCheck}`);

// Task 11: Find and replace the long word
const longWordIndex = storyWords.findIndex(word => {
    return word.length > 10;
});

storyWords[longWordIndex] = 'stunning';

// Task 12: Print final edited story
console.log(storyWords.join(' '));