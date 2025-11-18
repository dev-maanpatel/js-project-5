// HOME JS //
 $(document).ready(function () {
            $('.tool-card').on('mouseenter', function () {
                $(this).addClass('hovered');
            });

            $('.tool-card').on('mouseleave', function () {
                $(this).removeClass('hovered');
            });
        });

// 1. palindrome js //

$(document).ready(function () {
    $("#checkBtn").on("click", function () {
        
        let str = String(document.getElementById("strInput").value).toLowerCase();
                let result = document.getElementById("resultDisplay");
                let resultSection = document.getElementById("resultSection");
                
                $(resultDisplay).removeClass("success error");
                
                if (str === "") {
                    $(resultDisplay).text("PLEASE ENTER A WORD OR PHRASE.").addClass("error");
                    $(resultSection).css("display", "block");
                    return;
                }
                
                (str.trim() === str.trim().split("").reverse().join("")) ?
                $(resultDisplay).text("PALINDROME").addClass("success") :
                $(resultDisplay).text("NOT PALINDROME").addClass("error");
                
                $(resultSection).css("display", "block");
            })
            
        })

 // 2. anagrams js //

  $(document).ready(function () {
            $("#checkAnagramBtn").on("click", function () {
                let str1 = String(document.getElementById("strInput1").value).toLowerCase();
                let str2 = String(document.getElementById("strInput2").value).toLowerCase();
                let resultDisplay = document.getElementById("resultDisplay");
                let resultSection = document.getElementById("resultSection");

                $(resultDisplay).removeClass("success error");

                function cleanStr(str) {
                    return str.trim().toLowerCase().split("").filter(val => (val !== "" && val !== " ")).sort().join("");
                }

                console.log(cleanStr(str1), cleanStr(str2));

                if (str1 === "" || str2 === "") {
                    $(resultDisplay).text("PLEASE ENTER WORDS IN BOTH FIELDS.").addClass("error");
                    $(resultSection).css("display", "block");
                    return;
                }

                if (cleanStr(str1).length !== cleanStr(str2).length) {
                    $(resultDisplay).text("NOT AN ANAGRAM").addClass("error");
                    $(resultSection).css("display", "block");
                    return;
                }

                if (cleanStr(str1) === cleanStr(str2)) {
                    $(resultDisplay).text("ANAGRAM").addClass("success");
                } else {
                    $(resultDisplay).text("NOT AN ANAGRAM").addClass("error");
                }

                $(resultSection).css("display", "block");
            });
        });
 // 3. uppercase js
 $(document).ready(function () {
     $("#convertBtn").on("click", function () {
         
         let str = String(document.getElementById("strInput").value);
         let resultDisplay = document.getElementById("resultDisplay");
         let resultSection = document.getElementById("resultSection");
         
         $(resultDisplay).removeClass("error");
         
                if (str === "") {
                    $(resultDisplay).text("PLEASE ENTER A WORD OR SENTENCE.").addClass("error");
                    $(resultSection).css("display", "block");
                    return;
                }
                
                $(resultDisplay).text(str.trim().toUpperCase());
                $(resultSection).css("display", "block");
            })
        })

// 4. lowercase js
$(document).ready(function () {
    $("#convertBtn").on("click", function () {
        
        let str = String(document.getElementById("strInput").value);
        let resultDisplay = document.getElementById("resultDisplay");
        let resultSection = document.getElementById("resultSection");
        
        $(resultDisplay).removeClass("error");
        
        if (str === "") {
            $(resultDisplay).text("PLEASE ENTER A WORD OR SENTENCE.").addClass("error");
            $(resultSection).css("display", "block");
            return;
        }
        
        $(resultDisplay).text(str.trim().toLowerCase());
        $(resultSection).css("display", "block");
    })
})
// 5. toggle js
$(document).ready(function () {
    $("#convertBtn").on("click", function () {
        
        let str = String(document.getElementById("strInput").value);
                let resultDisplay = document.getElementById("resultDisplay");
                let resultSection = document.getElementById("resultSection");
                
                function toggleCase(str) {
                    return str.split("").map((char) => {
                        return char === char.toUpperCase()
                        ? char.toLowerCase()
                        : char.toUpperCase();
                    }).join("");
                }
                
                $(resultDisplay).removeClass("error");

                if (str === "") {
                    $(resultDisplay).text("PLEASE ENTER A WORD OR SENTENCE.").addClass("error");
                    $(resultSection).css("display", "block");
                    return;
                }
                
                $(resultDisplay).text(toggleCase(str));
                $(resultSection).css("display", "block");
            })
        })
// 6. longest word
$(document).ready(function () {
            $("#findBtn").on("click", function () {

                let str = String(document.getElementById("strInput").value);
                let resultDisplay = document.getElementById("resultDisplay");
                let resultSection = document.getElementById("resultSection");

                $(resultDisplay).removeClass("error");

                if (str === "") {
                    $(resultDisplay).text("PLEASE ENTER WORDS OR A SENTENCE.").addClass("error");
                    $(resultSection).css("display", "block");
                    return;
                }

                let wordList = str.trim().split(" ").filter(val => (val !== "" && val !== " "))
                let longestWords = [];
                let maxLength = 0;

                wordList.forEach(word => {
                    if (word.length > maxLength) {
                        maxLength = word.length;
                        longestWords = [word];
                    } else if (word.length === maxLength) {
                        longestWords.push(word);
                    }
                })

                if (longestWords.length === 0) {
                    $(resultDisplay).text("PLEASE ENTER WORDS OR A SENTENCE.").addClass("error");
                    $(resultSection).css("display", "block");
                    return;
                }

                $(resultDisplay).text(longestWords.join(", "));
                $(resultSection).css("display", "block");
            })
        })
        
 // 7. number of vowels and consonants 
        $(document).ready(function () {
            $("#findBtn").on("click", function () {

                let str = String(document.getElementById("strInput").value);
                let ans = document.getElementById("resultDisplay");
                let resultSection = document.getElementById("resultSection");

                const vowelList = /[aeiou]/i;
                const consonantList = /[b-df-hj-np-tv-z]/i;

                let vowelCount = 0;
                let consonantCount = 0;

                $(ans).removeClass("error");

                if (str === "") {
                    $(ans).text("PLEASE ENTER A WORD OR SENTENCE.").addClass("error");
                    $(resultSection).css("display", "block");
                    return;
                }

                str.split("").forEach((char) => {
                    if (vowelList.test(char)) {
                        vowelCount++;
                    } else if (consonantList.test(char)) {
                        consonantCount++;
                    }
                })

                $("#resultDisplay").html(`
                <p>Vowels: ${vowelCount}</p>
                <p>Consonants: ${consonantCount}</p>
                `);
                $(resultSection).css("display", "block");
            })
        })

// 8. 2nd largest / smallest number

 $(document).ready(function () {
            $("#findBtn").on("click", function () {

                let str = String(document.getElementById("strInput").value);
                let resultDisplay = document.getElementById("resultDisplay");
                let resultSection = document.getElementById("resultSection");

                $(resultDisplay).removeClass("error");

                if (str === "") {
                    $(resultDisplay).text("PLEASE ENTER AT LEAST FOUR NUMBERS.").addClass("error");
                    $(resultSection).css("display", "block");
                    return;
                }

                let numbers = str
                    .split(/[^-\d]+/)
                    .filter(val => val !== "")
                    .map(val => Number(val))
                    .sort((a, b) => a - b);

                if (numbers.length < 4) {
                    $(resultDisplay).text("PLEASE ENTER AT LEAST FOUR NUMBERS.").addClass("error");
                    $(resultSection).css("display", "block");
                    return;
                }

                $("#resultDisplay").html(`
                <p>2nd smallest number: ${numbers[1]}</p>
                <p>2nd largest number: ${numbers[numbers.length - 2]}</p>
                `)
                $(resultSection).css("display", "block");
            })
        })

// 9. prime number

 $(document).ready(function () {

            $("#findBtn").on("click", function () {

                let raw = $("#strInput").val().trim();
                let resultDisplay = $("#resultDisplay");
                let resultSection = $("#resultSection");

                resultDisplay.removeClass("error");

                if (raw === "") {
                    resultDisplay.text("PLEASE ENTER AT LEAST ONE NUMBER.").addClass("error");
                    resultSection.show();
                    return;
                }

                // extract numbers properly
                let nums = raw
                    .split(/[^0-9\-]+/)
                    .filter(v => v !== "" && !isNaN(v))
                    .map(v => Number(v));

                if (nums.length === 0) {
                    resultDisplay.text("PLEASE ENTER VALID NUMBERS.").addClass("error");
                    resultSection.show();
                    return;
                }

                function isPrime(n) {
                    if (n < 2) return false;
                    for (let i = 2; i <= Math.sqrt(n); i++) {
                        if (n % i === 0) return false;
                    }
                    return true;
                }

                let primes = [...new Set(nums.filter(n => isPrime(n)))];

                if (primes.length === 0) {
                    resultDisplay.text("NO PRIME NUMBERS FOUND.").addClass("error");
                } else {
                    resultDisplay.text(primes.join(", "));
                }

                resultSection.show();
            });

        });

// 10 . dublicate number 

 $(document).ready(function () {

            $("#findBtn").on("click", function () {

                let str = String($("#strInput").val());
                let resultDisplay = $("#resultDisplay");
                let resultSection = $("#resultSection");

                resultDisplay.removeClass("error");

                if (str.trim() === "") {
                    resultDisplay.text("PLEASE ENTER AT LEAST ONE NUMBER.").addClass("error");
                    resultSection.show();
                    return;
                }

                // Extract valid numbers/values
                let numbers = str
                    .split(/[^-\d]+/)
                    .filter(v => v !== "")
                    .filter((v, i, arr) => arr.indexOf(v) === i);

                if (numbers.length === 0) {
                    resultDisplay.text("PLEASE ENTER AT LEAST ONE NUMBER.").addClass("error");
                } else {
                    resultDisplay.text(numbers.join(", "));
                }

                resultSection.show();
            });

        });
