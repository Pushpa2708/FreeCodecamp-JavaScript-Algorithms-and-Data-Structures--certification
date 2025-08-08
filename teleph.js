const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const userInput = document.getElementById("user-input");

checkBtn.addEventListener("click", () => {
  const input = userInput.value.trim();

  
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  
  const validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/;

  if (validPattern.test(input)) {
    resultsDiv.textContent = `Valid US number: ${input}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${input}`;
  }
});


clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.textContent = "";
});
