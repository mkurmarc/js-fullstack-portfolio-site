function toggleProjectDetails() {
  let details = document.getElementById("projInfo1");

  if (details.style.display === "none") {
    // instead add a class to the element and toggle the class  (classList.
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
// function toggleProjectDetails() {
//   const btnEl = document.getElementById("hideShowBtn");

//   btnEl.addEventListener("click", (hideShow) => {
//     let details = document.getElementById("projDetails1");
//     if (details.style.display === "none") {
//       details.style.display = "block";
//     } else {
//       details.style.display = "none";
//     }
//   });

//   console.log("hhmmmm");
// }
