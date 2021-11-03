const reader = document.querySelector('textarea');
let counter = document.getElementById('panel')
const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890.,?!".split("");

//Input in textarea will trigger the event listener and call countWords function
reader.addEventListener('input',countWords);

//This function checks that all chars in word are letters
function alphabetCheck(word){
    //Convert string to lower case in order to make letter comparison easier
    newWord = word.toLowerCase();
    
    //If we match char to letters in alphabet, we will add to variable compare
    let compare = '';
    
    //Loop to compare each letter of the word to each letter of the alphabet
    for(let b = 0;b<word.length;b++) {
        for(let a = 0;a<alphabet.length;a++){
            if(newWord.charAt(b)==alphabet[a]){
                compare+=(alphabet[a]);
            }
        }
    }
    //Using the variable created by loop, if we have matching words, it means all chars are words
    if(compare==newWord) {
        return true;
    }
    else    
        return false;

}
//This function takes in the input and determines whether it is a word
function countWords(e){

    // Assign the input from the text area to variable word
    let paragraph = e.target.value;

    //Create an array of the paragraph variable by splitting the input using spaces
    let words = paragraph.split(" ");

    // Initialize word count to zero
    wordCount = 0;
    
    // Loop through the words make sure they are not empty
    for (let i = 0; i < words.length; i++) {
        if (words[i] != '') {
            //If method returns true, all chars are letters
            if(alphabetCheck(words[i])==true) {
                if(words[i]=='.' || words[i]==',' || words[i]=='?' || words[i]=='!')
                    continue
                else
                    wordCount += 1;
            }
            else { 
                continue
            }
        }
    }
    //Increase word count in real time
    counter.innerHTML = wordCount;
}