"use strict";

// const arrow = document.querySelector('.project-info1');

const projectTitles = document.querySelectorAll(".project-info");

const hiddenSections = document.querySelectorAll(".hidden-proj-info");

for (let i = 0; i < projectTitles.length; i++) {
  const projClassList = hiddenSections[i].classList;

  projectTitles[i].addEventListener("click", function () {
    if (projClassList.contains("hidden")) {
      projClassList.remove("hidden");
    } else {
      projClassList.add("hidden");
    }
  });
}

// arrow.addEventListener('click', function () {
//     if (projClassList.contains('hidden')) {
//         projClassList.remove('hidden')
//     } else {
//         projClassList.add('hidden');
//     }
// });
