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
