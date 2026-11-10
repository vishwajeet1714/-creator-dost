
console.log("Creator Dost is ready!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Creator Dost ❤️");

  const heading = document.querySelector("header h1");

  if (heading) {
    heading.addEventListener("click", () => {
      alert("Welcome to Creator Dost! 🚀");
    });
  }
});
