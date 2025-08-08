document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const result = document.getElementById('result');
    
    if (input === "") {
        alert('Please input a value');
        return;
    }

    const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedInput = cleanInput.split("").reverse().join("");

    if (cleanInput === reversedInput) {
        result.textContent = `${input}  is a palindrome`;
        result.style.color = 'green';
    } else {
        result.textContent = `${input}  is not a palindrome`;
        result.style.color = 'red';
    }
});
