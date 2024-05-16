function nextPalindrome(num) {
  //your JS code here.
	function isPalindrome(num) {
        return num.toString() === num.toString().split('').reverse().join('');
    }
	while (true) {
        num++;
        if (isPalindrome(num)) {
            return num;
        }
    }
}

const input = prompt("Enter a palindrome number");
if (!isNaN(input) && input > 0 && input <= 100000) {
    // Find next palindrome
    const result = nextPalindrome(input);
    // Display the result via alert
    alert("The next palindrome number is: " + result);
} else {
    // Display error message if input is invalid
    alert("Invalid input. Please enter a positive integer up to 100000.");
}
