        const inputElement = document.getElementById("inputString");
        const outputElement = document.getElementById("output");
        const submitButton = document.getElementById("submitButton");

        submitButton.addEventListener("click", function () {
            const inputString = inputElement.value;
            const reversedString = reverseString(inputString);
            outputElement.textContent = reversedString;
        });

        function reverseString(str) {
            let newString = [];
            let input = str.split("");

            for (let i = str.length - 1; i >= 0; i--) {
                newString.push(input[i]);
            }
            return newString.join("");
}

//Palindrome JS script

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


//Total Bill Amount JS script
        const calculateTotal = () => {
            const billAmount = document.getElementById('billAmount');
            const bill = parseFloat(billAmount.value);

            const tip = document.getElementById('tip');
            const tipPercent = parseFloat(tip.value) / 100;

            const tipAmount = bill * tipPercent;

            const total = tipAmount + bill;

            const totalAmountElement = document.getElementById('totalAmount');
            totalAmountElement.textContent = total.toFixed(2);
        }

