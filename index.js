"use strict";

const projectTitles = document.querySelectorAll(
  ".projects__project-title-container"
);

const arrow = document.querySelectorAll(".projects__project-title-arrow");

projectTitles.forEach((projectTitle) => {
  projectTitle.addEventListener("click", function () {
    const projClassList = projectTitle.nextElementSibling.classList;
    const arrowClassList = projectTitle.lastElementChild.classList;

    if (projClassList.contains("hidden")) {
      projClassList.remove("hidden");
      arrowClassList.add("projects__project-title-arrow--down");
    } else {
      projClassList.add("hidden");
      arrowClassList.remove("projects__project-title-arrow--down");
    }
  });
});
