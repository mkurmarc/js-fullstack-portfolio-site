"use strict";

const projectTitles = document.querySelectorAll(
  ".projects__project-title-container"
);

const hiddenSections = document.querySelectorAll(
  ".projects__hidden-details-container"
);

projectTitles.forEach((projectTitle) => {
  projectTitle.addEventListener("click", function () {
    const projClassList = projectTitle.nextElementSibling.classList;
    if (projClassList.contains("hidden")) {
      projClassList.remove("hidden");
    } else {
      projClassList.add("hidden");
    }
  });
});

// Below is the for loop version of the above forEach loop
// for (let i = 0; i < projectTitles.length; i++) {
//   const projClassList = hiddenSections[i].classList;

//   projectTitles[i].addEventListener("click", function () {
//     if (projClassList.contains("hidden")) {
//       projClassList.remove("hidden");
//     } else {
//       projClassList.add("hidden");
//     }
//   });
// }
