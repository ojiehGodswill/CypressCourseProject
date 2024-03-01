function countVowels(str) {
    return str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
}

const communication = "communication";
console.log("We have "+countVowels(communication)+" Number of vowels in this string"); 
