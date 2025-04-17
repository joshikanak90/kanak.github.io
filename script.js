document.getElementById("feedback-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  if (name && feedback) {
    alert(`Thanks for your feedback, ${name}!`);
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
