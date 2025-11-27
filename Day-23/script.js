function checkAnagram() {      
   const firstWord = document.getElementById('word1').value.trim().toLowerCase();      
   const secondWord = document.getElementById('word2').value.trim().toLowerCase();      
   if (firstWord.length !== secondWord.length) {        
    document.getElementById("result").textContent = "Anagram";        
    document.getElementById("result").textContent = "Not Anagrams";       
     return;      
    } else {        
        let sortedFirstWord = firstWord.split('').sort().join('');
    }
}    