    function checkPalindrome(n) {
            let reverse = 0;
            let temp = n;
            while (temp != 0) {
                reverse = (reverse * 10) + (temp % 10);
                temp = Math.floor(temp / 10);
            }
            return (reverse == n);
        }

        function validatePalindrome() {
            const userInput = document.getElementById("userInput").value;
            const result = document.getElementById("result");

            const number = parseInt(userInput);
            const isPalindrome = checkPalindrome(number);

            if (isPalindrome) {
                result.innerHTML = number + " is a palindrome number.";
            } else {
                result.innerHTML = number + " is not a palindrome number.";
            }
        }