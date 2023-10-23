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
