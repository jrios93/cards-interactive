// Update card display in real-time
document.getElementById("name").addEventListener("input", (e) => {
  document.getElementById("nameDisplay").textContent =
    e.target.value || "Jane Appleseed";
});

document.getElementById("number").addEventListener("input", (e) => {
  let value = e.target.value.replace(/\s/g, "");
  // Add space every 4 digits
  value = value.replace(/(\d{4})/g, "$1 ").trim();
  e.target.value = value;
  document.getElementById("numberDisplay").textContent =
    value || "0000 0000 0000 0000";
});

document.getElementById("month").addEventListener("input", updateExpDate);
document.getElementById("year").addEventListener("input", updateExpDate);

function updateExpDate() {
  const month = document.getElementById("month").value.padStart(2, "0");
  const year = document.getElementById("year").value.padStart(2, "0");
  document.getElementById("dateDisplay").textContent = `${month}/${year}`;
}

document.getElementById("cvc").addEventListener("input", (e) => {
  document.getElementById("cvcDisplay").textContent = e.target.value || "000";
});

// Form submission
document.getElementById("cardForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // Add your form submission logic here
  alert("Form submitted successfully!");
});

// Input validation
document.getElementById("number").addEventListener("keypress", (e) => {
  if (!/\d/.test(e.key)) e.preventDefault();
});

document.getElementById("month").addEventListener("keypress", (e) => {
  if (!/\d/.test(e.key)) e.preventDefault();
});

document.getElementById("year").addEventListener("keypress", (e) => {
  if (!/\d/.test(e.key)) e.preventDefault();
});

document.getElementById("cvc").addEventListener("keypress", (e) => {
  if (!/\d/.test(e.key)) e.preventDefault();
});
